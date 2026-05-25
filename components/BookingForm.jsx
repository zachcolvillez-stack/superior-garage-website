"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "General service",
  "Logbook service",
  "Brake repair",
  "Diagnostics",
  "Mechanical repair",
  "Battery issue",
  "Suspension/steering",
  "Other",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  vehicle: "",
  rego: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  consent: false,
  // honeypot: bots will fill this; legit users won't
  website: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!form.fullName || !form.phone || !form.email || !form.service || !form.consent) {
      setErrorMsg("Please fill in all required fields and accept the consent checkbox.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="book" className="section bg-ink-950 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500/15 text-green-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white">
              Thanks — your booking request has been sent.
            </h2>
            <p className="mt-2 text-gray-300">
              Superior Garage will contact you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-ink-500 bg-ink-800/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700 transition-colors"
            >
              Send another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="section bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-red">
            Book Online
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Request a booking
          </h2>
          <p className="mt-4 text-gray-300">
            Fill in your details and we'll get back to you to confirm a time.
            All enquiries go straight to the workshop.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 grid grid-cols-1 gap-5 rounded-2xl border border-ink-700 bg-ink-900/60 p-6 sm:p-8 md:grid-cols-2"
          noValidate
        >
          {/* Honeypot — hidden from real users */}
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
          >
            <label>
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </label>
          </div>

          <div>
            <label className="label" htmlFor="fullName">
              Full name <span className="text-accent-red">*</span>
            </label>
            <input
              id="fullName"
              className="field"
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="phone">
              Phone number <span className="text-accent-red">*</span>
            </label>
            <input
              id="phone"
              className="field"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="label" htmlFor="email">
              Email <span className="text-accent-red">*</span>
            </label>
            <input
              id="email"
              className="field"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="vehicle">
              Vehicle make / model / year
            </label>
            <input
              id="vehicle"
              className="field"
              type="text"
              placeholder="e.g. Toyota Hilux 2018"
              value={form.vehicle}
              onChange={(e) => update("vehicle", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="rego">
              Rego
            </label>
            <input
              id="rego"
              className="field"
              type="text"
              value={form.rego}
              onChange={(e) => update("rego", e.target.value.toUpperCase())}
            />
          </div>

          <div className="md:col-span-2">
            <label className="label" htmlFor="service">
              Service required <span className="text-accent-red">*</span>
            </label>
            <select
              id="service"
              className="field"
              required
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label" htmlFor="preferredDate">
              Preferred date
            </label>
            <input
              id="preferredDate"
              className="field"
              type="date"
              value={form.preferredDate}
              onChange={(e) => update("preferredDate", e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="preferredTime">
              Preferred time
            </label>
            <input
              id="preferredTime"
              className="field"
              type="time"
              value={form.preferredTime}
              onChange={(e) => update("preferredTime", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="field min-h-[120px] resize-y"
              placeholder="Anything we should know about your car or the issue?"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-ink-500 bg-ink-800 text-accent-red focus:ring-accent-red"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span>
                I agree to be contacted about my booking enquiry.{" "}
                <span className="text-accent-red">*</span>
              </span>
            </label>
          </div>

          {status === "error" && errorMsg && (
            <div className="md:col-span-2 flex items-start gap-2 rounded-md border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-red px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-redDark disabled:opacity-60 disabled:cursor-not-allowed shadow-glow transition-colors sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" />
              {status === "submitting" ? "Sending..." : "Send Booking Request"}
            </button>
            <p className="mt-3 text-xs text-gray-500">
              By submitting, your enquiry is emailed to Superior Garage. We'll reply by phone or email.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
