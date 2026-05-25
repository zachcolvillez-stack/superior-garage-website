import { ShieldCheck, Handshake, Wallet, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Honest service",
    body: "Straight answers about what your car actually needs — no upsell games.",
  },
  {
    icon: Wrench,
    title: "Quality repairs",
    body: "Workmanship we'd be happy to put our own car through.",
  },
  {
    icon: Wallet,
    title: "Affordable pricing",
    body: "Fair, transparent pricing for everyday Perth drivers.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & safe",
    body: "We keep your car running safely — for you, your family and the road.",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-ink-900/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-red">
            About Superior Garage
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            An established local workshop you can actually trust
          </h2>
          <p className="mt-5 text-gray-300">
            Superior Garage is a local Malaga-based automotive workshop built
            around honest service, quality repairs and affordable pricing.
            Whether you need a basic service, diagnostics, brake repairs or
            general mechanical work, the team is here to help keep your car
            safe and reliable.
          </p>
          <p className="mt-4 rounded-lg border border-ink-700 bg-ink-900/70 p-4 text-sm text-gray-300">
            <span className="font-semibold text-white">Established local workshop</span>{" "}
            serving Malaga and surrounding Perth suburbs.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-accent-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-redDark shadow-glow transition-colors"
            >
              Book a Service
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-ink-500 bg-ink-800/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-ink-700 bg-ink-900/70 p-5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-md bg-accent-red/10 text-accent-red border border-accent-red/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
