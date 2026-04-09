"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export function Projects() {
  const { t } = useLanguage();

  const projectsArray = Object.entries(t.projects.list);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-foreground"
        >
          {t.projects.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsArray.map(([projectKey, project], index) => (
            <motion.div
              key={projectKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-card hover:border-border/80 transition-colors border-border/40 overflow-hidden group">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md border border-border/50 bg-muted/30 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.demoLabel}
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="h-4 w-4" />
                      {project.githubLabel}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
