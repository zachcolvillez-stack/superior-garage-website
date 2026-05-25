import {
  Wrench,
  ClipboardCheck,
  Gauge,
  Disc3,
  ScanSearch,
  BatteryCharging,
  Car,
  Search,
  Truck,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Mechanical Repairs",
    body: "From odd noises to major mechanical work, we'll diagnose it and fix it properly.",
  },
  {
    icon: ClipboardCheck,
    title: "Logbook Servicing",
    body: "Manufacturer-spec logbook services that keep your new car warranty intact.",
  },
  {
    icon: Gauge,
    title: "Car Servicing",
    body: "Routine servicing to keep your car safe, smooth and reliable on the road.",
  },
  {
    icon: Disc3,
    title: "Brake Repairs",
    body: "Pads, rotors, fluid and full brake system inspections — stop with confidence.",
  },
  {
    icon: ScanSearch,
    title: "Diagnostics",
    body: "Modern scan tools to pinpoint warning lights and electrical faults fast.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Checks & Replacement",
    body: "Free battery health check and same-day replacement on most makes.",
  },
  {
    icon: Car,
    title: "Suspension & Steering",
    body: "Shocks, struts, bushes and steering components for a safer, smoother ride.",
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspections",
    body: "Thinking of buying a used car? We'll give it a thorough independent check.",
  },
  {
    icon: Truck,
    title: "Fleet & Commercial Servicing",
    body: "Keep your business vehicles on the road with reliable fleet servicing.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency / Urgent Repairs",
    body: "Urgent repair? Get in touch — we'll do our best to fit you in, subject to availability.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-red">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mechanical services for Perth drivers
          </h2>
          <p className="mt-4 text-gray-300">
            One trusted local workshop for everything from a basic service to
            complex mechanical repairs. Honest advice, fair pricing, every time.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative rounded-xl border border-ink-700 bg-ink-900/70 p-6 transition-colors hover:border-accent-red/40 hover:bg-ink-800/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-red/10 text-accent-red border border-accent-red/20">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-ink-700 bg-ink-900/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">
            Not sure what you need? Send us your details and we'll point you in the right direction.
          </p>
          <a
            href="#book"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-accent-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-redDark shadow-glow transition-colors"
          >
            Send Booking Request
          </a>
        </div>
      </div>
    </section>
  );
}
