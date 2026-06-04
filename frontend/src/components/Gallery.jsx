import { motion } from "framer-motion";
import { GALLERY } from "../constants/site";

export const Gallery = () => {
  return (
    <section
      id="projekti"
      data-testid="gallery-section"
      className="relative py-28 lg:py-36 bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
                [ 03 / Projekti ]
              </span>
              <span className="h-px w-24 bg-zinc-700" />
            </div>
            <h2
              data-testid="gallery-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]"
            >
              Naš rad,
              <br />
              <span className="text-yellow-400">snimljen na terenu.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-zinc-400 leading-relaxed">
            Mali isječak iz portfelja — industrijski pogoni, obiteljske kuće,
            poslovni prostori i fotonaponske elektrane.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-3">
          {GALLERY.map((g, idx) => (
            <motion.figure
              key={g.title}
              data-testid={`gallery-item-${idx}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative overflow-hidden border border-zinc-800 ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-display text-yellow-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                  {g.category}
                </span>
                <h3 className="mt-2 font-display font-bold text-base lg:text-lg text-white leading-tight">
                  {g.title}
                </h3>
              </figcaption>
              <span className="absolute top-4 right-4 h-2 w-2 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
