import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "../constants/site";

const heroBg = "https://images.pexels.com/photos/32588554/pexels-photo-32588554.jpeg";

export const Hero = () => {
  return (
    <section
      id="vrh"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent" />

      {/* Side label */}
      <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs uppercase tracking-[0.4em] text-yellow-400/80 font-bold gap-3 items-center">
        <span className="h-px w-12 bg-yellow-400/60" />
        <span>ovlašteni izvođač · est. 2004</span>
      </div>

      {/* Top corner status */}
      <div className="absolute top-28 right-6 lg:right-10 flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-zinc-300">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
        </span>
        <span data-testid="hero-status">Dežurni tim — dostupan sada</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display text-yellow-400 text-sm uppercase tracking-[0.3em] font-bold">
              [ 01 / Elektroinstalacije ]
            </span>
            <span className="h-px flex-1 max-w-[160px] bg-zinc-700" />
          </div>

          <h1
            data-testid="hero-title"
            className="font-display text-5xl sm:text-7xl lg:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase text-white"
          >
            Struja koja
            <br />
            <span className="text-yellow-400">radi</span> za vas.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-10 max-w-2xl text-lg lg:text-xl text-zinc-300 leading-relaxed font-light"
          >
            {COMPANY.description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              data-testid="hero-cta-primary"
              href="#kontakt"
              className="group inline-flex items-center gap-3 bg-yellow-400 text-black px-7 h-14 font-bold uppercase tracking-widest text-sm hover:bg-yellow-300 transition-all"
            >
              Zatraži ponudu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              data-testid="hero-cta-secondary"
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border border-yellow-400/60 text-yellow-400 px-7 h-14 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400/10 transition-all"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
