import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../constants/site";

export const Services = () => {
  return (
    <section
      id="usluge"
      data-testid="services-section"
      className="relative py-28 lg:py-36 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
                [ 02 / Usluge ]
              </span>
              <span className="h-px w-24 bg-zinc-700" />
            </div>
            <h2
              data-testid="services-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]"
            >
              Područja u kojima
              <br />
              <span className="text-yellow-400">znamo svaku žicu.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-base text-zinc-400 leading-relaxed">
            Od jednostavnih popravaka do industrijskih razvodnih ormara —
            ElektroWatt pokriva cijeli ciklus elektroinstalacijskih radova
            pod jednim krovom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const wide = idx === 0 || idx === 4;
            return (
              <motion.div
                key={s.id}
                data-testid={`service-card-${s.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors p-8 lg:p-10 ${
                  wide ? "lg:col-span-2" : ""
                } ${idx === 4 ? "lg:col-span-3" : ""}`}
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="font-display text-zinc-700 text-sm font-bold tracking-widest">
                    {s.number}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-yellow-400/40 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                  {s.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-xs uppercase tracking-widest text-zinc-300 flex items-center gap-3"
                    >
                      <span className="h-px w-6 bg-yellow-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  data-testid={`service-link-${s.id}`}
                  className="inline-flex items-center gap-2 text-yellow-400 text-xs uppercase tracking-widest font-bold link-underline"
                >
                  Saznaj više
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/0 to-transparent group-hover:via-yellow-400/80 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
