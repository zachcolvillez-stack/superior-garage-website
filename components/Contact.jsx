import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-red">
            Get in touch
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Superior Garage Malaga
          </h2>
          <p className="mt-4 text-gray-300">
            Drop in, give us a call, or send a booking enquiry — whichever's easiest.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactRow
              icon={MapPin}
              title="Address"
              href="https://www.google.com/maps/search/?api=1&query=1%2F14+Vale+St%2C+Malaga+WA+6090"
            >
              1/14 Vale St, Malaga WA 6090
            </ContactRow>
            <ContactRow icon={Phone} title="Phone" href="tel:+61478921998">
              0478 921 998
            </ContactRow>
            <ContactRow
              icon={Mail}
              title="Email"
              href="mailto:bookings@superiorgarage.com.au"
            >
              bookings@superiorgarage.com.au
            </ContactRow>
            <ContactRow
              icon={Instagram}
              title="Instagram"
              href="https://instagram.com/superiorgarage__"
            >
              @superiorgarage__
            </ContactRow>
            <ContactRow icon={Clock} title="Opening hours">
              Open 7 days — contact us to confirm availability
            </ContactRow>

            <div className="pt-2">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-md bg-accent-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-redDark shadow-glow transition-colors"
              >
                Send Booking Request
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
            <iframe
              title="Superior Garage Malaga location"
              src="https://www.google.com/maps?q=1/14+Vale+St,+Malaga+WA+6090&output=embed"
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, href, children }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900/60 p-4 transition-colors hover:border-accent-red/30 hover:bg-ink-900/90">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent-red/10 text-accent-red border border-accent-red/20">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {title}
        </p>
        <p className="mt-0.5 text-white">{children}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}
