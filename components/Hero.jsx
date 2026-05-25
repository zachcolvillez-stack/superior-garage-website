import { Phone, CalendarCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section relative overflow-hidden bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[420px] bg-grid-fade" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-red">
            <MapPin className="h-3.5 w-3.5" />
            Malaga · Perth WA 6090
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality Mechanical Repairs &amp;{" "}
            <span className="text-accent-red">Servicing in Malaga</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-gray-300">
            Superior Garage is a locally owned Malaga workshop helping Perth
            drivers with reliable, affordable vehicle servicing and repairs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-red px-6 py-3 text-base font-semibold text-white hover:bg-accent-redDark shadow-glow transition-colors"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Service
            </a>
            <a
              href="tel:+61478921998"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-500 bg-ink-800/60 px-6 py-3 text-base font-semibold text-white hover:bg-ink-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              0478 921 998
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Open 7 days — contact us to confirm availability
            </span>
          </div>
        </div>

        {/* Hero photo — drop public/images/hero.jpg to replace */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl">
            <img
              src="/images/hero.webp"
              alt="Superior Garage workshop"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20" />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-ink-700 bg-ink-900/95 px-5 py-4 shadow-xl backdrop-blur md:block">
            <p className="text-xs uppercase tracking-widest text-gray-400">Locally owned</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Honest service. Fair pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
