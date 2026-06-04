import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Kontakt i izlazak na uvid",
    body: "Nakon vaše poruke ili poziva dolazimo na lokaciju, snimamo postojeće stanje i razgovaramo o potrebama.",
  },
  {
    n: "02",
    title: "Ponuda i projekt",
    body: "Izrađujemo detaljnu ponudu sa svim stavkama, materijalima i rokom. Po potrebi izrađujemo i izvedbeni projekt.",
  },
  {
    n: "03",
    title: "Izvedba radova",
    body: "Tim ovlaštenih elektroinstalatera izvodi radove u dogovorenom roku, urednom prostoru i bez improvizacija.",
  },
  {
    n: "04",
    title: "Mjerenje i atest",
    body: "Provodimo sva propisana mjerenja, izdajemo atest i jamstvo od 24 mjeseca. Predaja na ključ.",
  },
];

export const Process = () => {
  return (
    <section
      data-testid="process-section"
      className="relative py-28 lg:py-36 bg-[#080808] border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
                [ 05 / Proces ]
              </span>
              <span className="h-px w-24 bg-zinc-700" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
              Od prvog poziva do
              <br />
              <span className="text-yellow-400">posljednje sklopke.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-base text-zinc-400 leading-relaxed">
            Transparentan proces u četiri jasna koraka — bez skrivenih
            stavki i nepoznatih rokova.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`process-step-${s.n}`}
              className="relative bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors p-8 lg:p-10 group"
            >
              <span className="font-display text-yellow-400 text-5xl lg:text-6xl font-black tracking-tight leading-none">
                {s.n}
              </span>
              <h3 className="mt-8 font-display font-bold text-xl lg:text-2xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {s.body}
              </p>
              <span className="absolute top-8 right-8 h-2 w-2 bg-zinc-700 group-hover:bg-yellow-400 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
