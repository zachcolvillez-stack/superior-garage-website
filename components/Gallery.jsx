import { Camera } from "lucide-react";

/*
 * Gallery photos live in /public/images/. To swap one out, just replace
 * the file at that path with the same filename. Keep new photos under
 * ~500 KB each for fast loading.
 */
const tiles = [
  { label: "Inside the workshop", src: "/images/workshop-overhead.jpg" },
  { label: "On the hoist", src: "/images/hyundai-hoist.jpg" },
  { label: "Skyline in for work", src: "/images/skyline-workshop.webp" },
  { label: "Detailed finish", src: "/images/hero.webp" },
  // Team photo not supplied yet — replace src with /images/team.jpg when ready.
  { label: "Team photo", src: null },
  // Extra slot for a future photo — replace src with /images/<name> when ready.
  { label: "More coming soon", src: null },
];

export default function Gallery() {
  return (
    <section className="bg-ink-900/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-red">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Inside the workshop
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400">
            Real shots from the Superior Garage workshop in Malaga.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <figure
              key={t.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-ink-700 bg-ink-900"
            >
              {t.src ? (
                <>
                  <img
                    src={t.src}
                    alt={t.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                    <figcaption className="text-sm font-semibold text-white">
                      {t.label}
                    </figcaption>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-black" />
                  <div className="absolute inset-0 bg-blueprint opacity-25" />
                  <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-600 bg-ink-800/80 text-gray-400">
                      <Camera className="h-5 w-5" />
                    </span>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                      {t.label}
                    </span>
                    <span className="mt-1 text-[11px] text-gray-500">
                      Photo coming soon
                    </span>
                  </figcaption>
                </>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
