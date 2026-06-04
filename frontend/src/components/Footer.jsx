import { Zap } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../constants/site";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-black border-t border-zinc-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center bg-yellow-400 text-black">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <div>
            <p className="font-display font-black uppercase tracking-tight">
              {COMPANY.name}
            </p>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} ElektroWatt obrt. Sva prava
              pridržana.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-yellow-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-zinc-500 uppercase tracking-widest">
          Izrada · ElektroWatt studio
        </p>
      </div>
    </footer>
  );
};
