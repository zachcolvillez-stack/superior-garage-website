import { MapPin, Tag, ShieldCheck, Clock, Zap } from "lucide-react";

const points = [
  { icon: MapPin, label: "Locally owned workshop" },
  { icon: Tag, label: "Affordable pricing" },
  { icon: ShieldCheck, label: "Quality workmanship" },
  { icon: Clock, label: "Open 7 days" },
  { icon: Zap, label: "Fast booking enquiries" },
];

export default function Trust() {
  return (
    <section className="border-y border-ink-700 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {points.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-sm text-gray-200"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-red/10 text-accent-red border border-accent-red/20">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
