"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size[24px_24px]"></div>

      <div className=" container px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col items-star max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            {t.hero.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            {t.hero.greeting}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
          >
            {t.hero.description}
            <br />
            <span className="font-semibold">{t.hero.stack}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2 group" asChild>
              <a href="#projects">
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#contact">{t.nav.contact}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
