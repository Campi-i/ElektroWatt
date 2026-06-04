import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { VALUES, COMPANY } from "../constants/site";

const aboutImg = "https://images.pexels.com/photos/33531820/pexels-photo-33531820.jpeg";

export const About = () => {
  return (
    <section
      id="o-nama"
      data-testid="about-section"
      className="relative py-28 lg:py-36 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] border border-zinc-800 overflow-hidden">
            <img
              src={aboutImg}
              alt="ElektroWatt tehničar"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-yellow-400 text-black p-6 lg:p-8 max-w-[260px]">
            <span className="font-display text-5xl lg:text-6xl font-black leading-none">
              20+
            </span>
            <p className="mt-2 text-xs uppercase tracking-widest font-bold">
              godina iskustva na hrvatskom tržištu
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
              [ 04 / O nama ]
            </span>
            <span className="h-px w-24 bg-zinc-700" />
          </div>
          <h2
            data-testid="about-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]"
          >
            Obiteljski obrt,
            <br />
            <span className="text-yellow-400">inženjerski tim.</span>
          </h2>
          <p className="mt-8 text-base lg:text-lg text-zinc-300 leading-relaxed">
            {COMPANY.name} je obiteljska elektroinstalacijska tvrtka osnovana
            2004. godine. Iza nas su tisuće završenih projekata — od stanova u
            novogradnji do industrijskih pogona. Vjerujemo u jednostavno
            načelo: kvaliteta koja se mjeri instrumentima, a ne riječima.
          </p>

          <div className="mt-10 space-y-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                data-testid={`value-${v.title}`}
                className="flex gap-4 pb-5 border-b border-zinc-900"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center bg-yellow-400 text-black shrink-0">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
