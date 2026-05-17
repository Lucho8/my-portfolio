"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Terminal, Briefcase } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-800/40 py-5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">

       
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Luciano Fredes
          <span className="mx-2 text-zinc-800">·</span>
          {t.footer.madeWith}
        </p>

    
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Lucho8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-zinc-600 transition-colors duration-200 hover:text-cyan-400"
          >
            <Terminal className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/luciano-gonzalo-fredes-96b786192/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-zinc-600 transition-colors duration-200 hover:text-violet-400"
          >
            <Briefcase className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}