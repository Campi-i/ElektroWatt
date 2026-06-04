import { motion } from "framer-motion";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY } from "../constants/site";

export const Contact = () => {
  return (
    <section
      id="kontakt"
      data-testid="contact-section"
      className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
            [ 07 / Kontakt ]
          </span>
          <span className="h-px w-24 bg-zinc-700" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-testid="contact-title"
          className="font-display text-5xl sm:text-7xl lg:text-[8.5rem] font-black tracking-tighter uppercase leading-[0.85] max-w-6xl"
        >
          Imate projekt?
          <br />
          <span className="text-yellow-400">Javite nam se.</span>
        </motion.h2>

        <p className="mt-10 max-w-2xl text-lg text-zinc-300 leading-relaxed">
          Pošaljite kratak opis radova, lokaciju i okvirni rok. Odgovaramo u
          roku 24 sata radnim danom — a za hitne intervencije zovite odmah.
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Mailto block */}
          <div className="lg:col-span-7">
            <a
              data-testid="contact-mailto"
              href={`mailto:${COMPANY.email}?subject=Upit%20za%20elektroinstalacijske%20radove`}
              className="group block border border-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all p-8 lg:p-10"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-400">
                Pošalji e-mail
              </span>
              <div className="mt-5 flex items-end justify-between gap-6 flex-wrap">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight break-all">
                  {COMPANY.email}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center bg-yellow-400 text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
                </span>
              </div>
            </a>

            <a
              data-testid="contact-phone"
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="mt-4 group block border border-zinc-800 hover:border-yellow-400/60 hover:bg-yellow-400/5 transition-all p-8 lg:p-10"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-400">
                Nazovi
              </span>
              <div className="mt-5 flex items-end justify-between gap-6 flex-wrap">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  {COMPANY.phone}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center border border-yellow-400/60 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <Phone className="h-5 w-5" />
                </span>
              </div>
            </a>
          </div>

          {/* Info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l-2 border-yellow-400 pl-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Adresa
              </span>
              <p className="mt-3 font-display font-bold text-xl tracking-tight">
                {COMPANY.address}
              </p>
              <p className="text-sm text-zinc-400 mt-1">{COMPANY.oib}</p>
            </div>

            <div className="border-l-2 border-zinc-800 pl-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-400 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Radno vrijeme
              </span>
              <p className="mt-3 font-display font-bold text-xl tracking-tight leading-snug">
                {COMPANY.hours}
              </p>
            </div>

            <div className="border-l-2 border-zinc-800 pl-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-400">
                Područje rada
              </span>
              <p className="mt-3 text-base text-zinc-300 leading-relaxed">
                Zagreb · Velika Gorica · Samobor · Zaprešić · Sesvete ·
                Karlovac · cijela kontinentalna Hrvatska
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
