"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const TECH_STACK = [
  "Next.js", "TypeScript", "React",
  "Tailwind CSS", "PostgreSQL", "Prisma",
  ".NET 10", "C#", "JWT", "Docker",
];

const JSON_LINES = [
  { key: "name",      value: '"Luciano Fredes"',    color: "text-emerald-400" },
  { key: "role",      value: '"Fullstack Engineer"', color: "text-emerald-400" },
  { key: "focus",     value: '"Next.js + .NET"',     color: "text-emerald-400" },
  { key: "projects",  value: "4",                    color: "text-violet-400"  },
  { key: "available", value: "true",                 color: "text-cyan-400"    },
];

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="hidden lg:flex flex-col gap-4"
    >
      <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      
        <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-zinc-950/60 px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-zinc-600">~/dev.json</span>
        </div>

    
        <div className="p-5 font-mono text-sm leading-7">
          <div className="text-zinc-600">{"{"}</div>
          {JSON_LINES.map(({ key, value, color }, i) => (
            <div key={key} className="ml-4">
              <span className="text-cyan-400">"{key}"</span>
              <span className="text-zinc-500">: </span>
              <span className={color}>{value}</span>
              {i < JSON_LINES.length - 1 && <span className="text-zinc-600">,</span>}
            </div>
          ))}
          <div className="text-zinc-600">{"}"}</div>
        </div>

    
        <div className="grid grid-cols-3 border-t border-zinc-800/60 bg-zinc-950/40">
          {[
            { label: "Proyectos", value: "4"      },
            { label: "Tech Stack", value: "10+"   },
            { label: "Deploys",   value: "✓ Live" },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center py-4 ${i < 2 ? "border-r border-zinc-800/60" : ""}`}
            >
              <span className="font-mono text-sm font-bold text-cyan-400">{value}</span>
              <span className="mt-0.5 font-mono text-[10px] text-zinc-600">{label}</span>
            </div>
          ))}
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono text-xs text-zinc-500">
          Open to work · Buenos Aires, AR
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();


  const greetingPrefix = t.hero.greeting
    .replace(/luciano fredes\.?/i, "")
    .replace(/,$/, "")
    .trim();

  return (
    <section
      id="about"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-16"
    >

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="orb-animate absolute -top-24 left-1/4 h-130 w-130 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)", animationDelay: "0s" }}
        />
        <div
          className="orb-animate absolute bottom-0 right-1/4 h-105 w-105 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 70%)", animationDelay: "-3.5s" }}
        />
        <div
          className="orb-animate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-160 w-160 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)", animationDelay: "-6s" }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[32px_32px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(9,9,11,0.85)_100%)]" />

      <div className="container w-full px-4 md:px-8 max-w-6xl">
     
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_400px]">

        
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {t.hero.badge}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-3 font-mono text-sm select-none"
            >
              <span className="text-zinc-600">~/portfolio</span>
              <span className="mx-2 text-emerald-400">❯</span>
              <span className="text-zinc-500">whoami</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="block text-zinc-100">{greetingPrefix},</span>
              <span className="block text-gradient-cyan mt-1">Luciano Fredes</span>
              <span className="cursor-blink inline-block text-cyan-400 ml-1">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-3 text-base leading-relaxed text-zinc-400"
            >
              {t.hero.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="mb-8 font-mono text-sm text-emerald-400/75"
            >
              {t.hero.stack}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="mb-10 flex flex-wrap gap-2"
            >
              {TECH_STACK.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.58 + i * 0.04, duration: 0.3 }}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-500 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:text-cyan-300 cursor-default select-none"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-emerald-400 hover:shadow-cyan-400/30 hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-400 backdrop-blur-sm transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {t.nav.contact}
              </a>
            </motion.div>
          </div>

      
          <TerminalCard />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-zinc-950 to-transparent" />
    </section>
  );
}