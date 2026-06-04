import { STATS } from "../constants/site";

export const TrustStrip = () => {
  const partners = [
    "ABB",
    "Schneider Electric",
    "Hager",
    "Loxone",
    "KNX",
    "Siemens",
    "Legrand",
    "SMA Solar",
  ];

  return (
    <section
      data-testid="trust-strip"
      className="bg-yellow-400 text-black border-y border-yellow-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            data-testid={`stat-${s.label}`}
            className="flex flex-col"
          >
            <span className="font-display text-3xl md:text-4xl font-black tracking-tight leading-none">
              {s.value}
            </span>
            <span className="mt-1 text-xs uppercase tracking-widest font-bold">
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-black/20 py-3">
        <div className="flex whitespace-nowrap marquee-track w-max">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="px-8 text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-8"
            >
              {p}
              <span className="h-1 w-1 bg-black rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
