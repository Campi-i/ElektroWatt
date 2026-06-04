import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../constants/site";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#vrh"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center bg-yellow-400 text-black">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-black text-xl tracking-tight uppercase">
            {COMPANY.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              data-testid={l.id}
              href={l.href}
              className="text-sm uppercase tracking-widest font-semibold text-zinc-300 hover:text-yellow-400 transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            data-testid="nav-cta"
            asChild
            className="rounded-none bg-yellow-400 text-black hover:bg-yellow-300 font-bold uppercase tracking-wider h-11 px-6"
          >
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
              Nazovi sada
            </a>
          </Button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-widest font-semibold text-zinc-200 hover:text-yellow-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center bg-yellow-400 text-black px-5 py-3 font-bold uppercase tracking-wider"
            >
              Nazovi sada
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
