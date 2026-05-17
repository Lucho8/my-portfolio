"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

// Each project gets its own color accent
const PROJECT_ACCENTS = [
  {
    gradient:  "from-cyan-500 to-blue-500",
    glow:      "card-glow-cyan",
    tagStyle:  "border-cyan-800/50 bg-cyan-950/50 text-cyan-400",
    btnHover:  "hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30",
    number:    "01",
  },
  {
    gradient:  "from-violet-500 to-purple-600",
    glow:      "card-glow-violet",
    tagStyle:  "border-violet-800/50 bg-violet-950/50 text-violet-400",
    btnHover:  "hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-950/30",
    number:    "02",
  },
  {
    gradient:  "from-emerald-500 to-teal-500",
    glow:      "card-glow-emerald",
    tagStyle:  "border-emerald-800/50 bg-emerald-950/50 text-emerald-400",
    btnHover:  "hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-emerald-950/30",
    number:    "03",
  },
  {
    gradient:  "from-orange-500 to-red-500",
    glow:      "card-glow-orange",
    tagStyle:  "border-orange-800/50 bg-orange-950/50 text-orange-400",
    btnHover:  "hover:border-orange-500/50 hover:text-orange-300 hover:bg-orange-950/30",
    number:    "04",
  },
] as const;

export function Projects() {
  const { t } = useLanguage();
  const projectsArray = Object.entries(t.projects.list);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 font-mono text-sm select-none">
            <span className="text-zinc-600">~/portfolio</span>
            <span className="mx-2 text-emerald-400">❯</span>
            <span className="text-zinc-500">ls projects/</span>
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.projects.sectionTitle}
            <span className="ml-2 text-cyan-400">.</span>
          </h2>
          {/* Gradient underline accent */}
          <div className="mt-4 h-px w-28 bg-linear-to-r from-cyan-500 via-emerald-400 to-transparent" />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsArray.map(([projectKey, project], index) => {
            const accent = PROJECT_ACCENTS[index % PROJECT_ACCENTS.length];
            return (
              <motion.article
                key={projectKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ${accent.glow} hover:-translate-y-1.5`}
              >
                {/* Colored top bar */}
                <div className={`h-0.75 w-full bg-linear-to-r ${accent.gradient} shrink-0`} />

                {/* Card top: title + number */}
                <div className="flex items-start justify-between px-5 pt-5 pb-2">
                  <h3 className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors duration-200">
                    {project.name}
                  </h3>
                  <span className={`font-mono text-xs font-bold bg-linear-to-r ${accent.gradient} bg-clip-text text-transparent select-none`}>
                    {accent.number}
                  </span>
                </div>

                {/* Description */}
                <p className="flex-1 px-5 pb-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`rounded border px-2 py-0.5 font-mono text-[11px] tracking-wide transition-colors duration-200 ${accent.tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions footer */}
                <div className="flex items-center gap-2.5 border-t border-zinc-800/80 bg-zinc-950/40 px-5 py-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 ${accent.btnHover}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {project.demoLabel}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 ${accent.btnHover}`}
                  >
                    <Code className="h-3 w-3" />
                    {project.githubLabel}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}