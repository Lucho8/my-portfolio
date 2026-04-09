"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Terminal, Briefcase, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-border/40 py-12 mt-10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Lucho8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <span className="sr-only">GitHub</span>
            <Terminal className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/luciano-gonzalo-fredes-96b786192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <span className="sr-only">LinkedIn</span>
            <Briefcase className="h-6 w-6" />
          </a>

          <a
            href="mailto:lucianogonzalofredes@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 flex items-center gap-2"
          >
            <Mail className="h-6 w-6" />
            {/* Mostrar el correo de forma visible y clara */}
            <span className="hidden sm:inline">
              lucianogonzalofredes@gmail.com
            </span>
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Luciano Fredes. {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
}
