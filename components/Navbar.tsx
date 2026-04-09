"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-8">
        <div className="font-bold text-xl tracking-tight">
          \ LF<span className="text-muted-foreground">.dev</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="hidden md:flex gap-6">
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 cursor-pointer"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language}</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
