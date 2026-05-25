import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/images/logo.png"
              alt="Superior Garage Malaga"
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Locally owned automotive workshop in Malaga, Perth WA. Quality
              repairs, honest service, fair pricing.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Quick links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent-red" />
                <span>1/14 Vale St, Malaga WA 6090</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-accent-red" />
                <a href="tel:+61478921998" className="hover:text-white">
                  0478 921 998
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-accent-red" />
                <a
                  href="mailto:bookings@superiorgarage.com.au"
                  className="hover:text-white"
                >
                  bookings@superiorgarage.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="mt-0.5 h-4 w-4 text-accent-red" />
                <a
                  href="https://instagram.com/superiorgarage__"
                  className="hover:text-white"
                >
                  @superiorgarage__
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-700 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">
            © {year} Superior Garage Malaga. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Website by{" "}
            <span className="font-semibold text-gray-300">Bluepeek</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
