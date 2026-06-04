import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQS } from "../constants/site";

export const FAQ = () => {
  return (
    <section
      id="cesta-pitanja"
      data-testid="faq-section"
      className="relative py-28 lg:py-36 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold">
              [ 06 / Pitanja ]
            </span>
            <span className="h-px w-24 bg-zinc-700" />
          </div>
          <h2
            data-testid="faq-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]"
          >
            Često
            <br />
            <span className="text-yellow-400">postavljena</span>
            <br />
            pitanja.
          </h2>
          <p className="mt-8 text-base text-zinc-400 leading-relaxed max-w-md">
            Ako ne pronađete odgovor — pošaljite poruku na{" "}
            <a
              href="mailto:info@elektrowatt.hr"
              className="text-yellow-400 hover:underline"
            >
              info@elektrowatt.hr
            </a>{" "}
            i odgovaramo u istom danu.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <AccordionTrigger className="text-left font-display font-bold text-lg lg:text-xl tracking-tight py-6 hover:text-yellow-400 hover:no-underline">
                  <span className="flex gap-5 items-start">
                    <span className="text-yellow-400 text-sm font-mono mt-1">
                      0{i + 1}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-base leading-relaxed pl-10 pb-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
