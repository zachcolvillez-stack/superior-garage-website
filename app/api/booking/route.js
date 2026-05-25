import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Very simple in-memory rate limiter (per IP). Good enough as a basic guard
// for a small site; resets when the server cold-starts. Replace with Upstash
// Redis or similar if you need persistence across regions / instances.
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;
const buckets = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const entry = buckets.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  buckets.set(ip, entry);
  return entry.count <= RATE_LIMIT_MAX;
}

function isEmail(v) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(data) {
  const lines = [
    ["Name", data.fullName],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Vehicle", data.vehicle],
    ["Rego", data.rego],
    ["Service required", data.service],
    ["Preferred date", data.preferredDate],
    ["Preferred time", data.preferredTime],
    ["Message", data.message],
    ["Consent given", data.consent ? "Yes" : "No"],
  ];

  const text = lines
    .map(([k, v]) => `${k}: ${v || "—"}`)
    .join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#111;">
      <h2 style="margin:0 0 12px;">New Website Booking — Superior Garage</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px;">
        ${lines
          .map(
            ([k, v]) => `
          <tr>
            <td style="background:#f4f4f5;font-weight:600;border:1px solid #e4e4e7;">${escapeHtml(
              k
            )}</td>
            <td style="border:1px solid #e4e4e7;">${escapeHtml(v || "—")}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  return { text, html };
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot: legit users won't fill this hidden field.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      // Pretend success so bots don't learn anything.
      return NextResponse.json({ ok: true });
    }

    const {
      fullName,
      phone,
      email,
      vehicle = "",
      rego = "",
      service,
      preferredDate = "",
      preferredTime = "",
      message = "",
      consent,
    } = body;

    if (!fullName || !phone || !email || !service || !consent) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (String(message).length > 4000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const to = process.env.GARAGE_BOOKING_EMAIL || "bookings@superiorgarage.com.au";
    const from = process.env.GARAGE_FROM_EMAIL || "Superior Garage <onboarding@resend.dev>";
    const apiKey = process.env.RESEND_API_KEY;

    const safeData = {
      fullName,
      phone,
      email,
      vehicle,
      rego,
      service,
      preferredDate,
      preferredTime,
      message,
      consent,
    };
    const { text, html } = buildEmail(safeData);

    if (!apiKey) {
      // Email not configured yet. Log server-side so the owner / dev can see
      // the submission in their logs, and still return success so the form
      // can be demoed before email is wired up.
      console.log(
        "[booking] RESEND_API_KEY not set. Submission would be emailed to",
        to,
        "\n",
        text
      );
      return NextResponse.json({ ok: true, delivered: false });
    }

    try {
      // Dynamic import keeps the package optional at build time.
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: "New Website Booking - Superior Garage",
        text,
        html,
      });
      if (error) {
        console.error("[booking] Resend error:", error);
        return NextResponse.json(
          { error: "Could not send your enquiry. Please try again or call us." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[booking] Unexpected email error:", err);
      return NextResponse.json(
        { error: "Could not send your enquiry. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[booking] Handler error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
