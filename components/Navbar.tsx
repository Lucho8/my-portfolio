"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about,    href: "#about"    },
    { label: t.nav.contact,  href: "#contact"  },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
    >
    
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-8">

    
        <a
          href="#about"
          className="group flex items-center font-mono text-lg font-bold tracking-tight"
          aria-label="Ir al inicio"
        >
          <span className="text-cyan-400 transition-colors duration-200 group-hover:text-cyan-300">\</span>
          <span className="ml-1 text-zinc-200 transition-colors duration-200 group-hover:text-white">LF</span>
          <span className="text-zinc-600 transition-colors duration-200 group-hover:text-zinc-400">.dev</span>
        </a>


        <div className="flex items-center gap-5">

   
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-100 nav-link-underline"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 font-mono text-xs font-medium text-zinc-500 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:text-cyan-400"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="uppercase">{language}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}