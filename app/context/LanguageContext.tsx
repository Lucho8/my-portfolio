"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface Dictionary {
  nav: {
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    description: string;
    stack: string;
    cta: string;
  };
  projects: {
    sectionTitle: string;
    list: {
      dripStore: {
        name: string;
        description: string;
        tags: string[];
        demoLabel: string;
        demoUrl: string;
        githubLabel: string;
        githubUrl: string;
      };
      techiesTechstore: {
        name: string;
        description: string;
        tags: string[];
        demoLabel: string;
        demoUrl: string;
        githubLabel: string;
        githubUrl: string;
      };
      interviewerAI: {
        name: string;
        description: string;
        tags: string[];
        demoLabel: string;
        demoUrl: string;
        githubLabel: string;
        githubUrl: string;
      };
    };
  };
  footer: {
    madeWith: string;
  };
}

const translations: Record<Language, Dictionary> = {
  es: {
    nav: { projects: "Proyectos", about: "Sobre Mí", contact: "Contacto" },
    hero: {
      badge: "Disponible para nuevas oportunidades",
      greeting: "Hola, soy Luciano Fredes.",
      description:
        "Ingeniero Fullstack especializado en ecosistemas React y Arquitecturas Escalables. Me dedico a desarrollar plataformas completas, seguras y orientadas al usuario. Mi enfoque principal está en el Frontend con Next.js y TypeScript, creando interfaces modulares respaldadas por integraciones backend robustas y bases de datos relacionales. Construyo software pensando tanto en la experiencia del cliente como en la lógica del negocio, asegurándome de que cada despliegue esté listo para producción.",
      stack:
        "🛠️ Core Stack: Next.js | TypeScript | React | Tailwind CSS | PostgreSQL | Prisma",
      cta: "Ver Proyectos",
    },
    projects: {
      sectionTitle: "Proyectos Destacados",
      list: {
        dripStore: {
          name: "DripStore",
          description:
            "Una plataforma e-commerce Fullstack escalable construida con Next.js 16, TypeScript y PostgreSQL (vía Prisma). Incluye una tienda para clientes con procesamiento de pagos seguros mediante Stripe y un panel de administración completo para gestionar inventario, órdenes y analizar métricas de ventas.",
          tags: ["Next.js 16", "Prisma", "Stripe", "Tailwind"],
          demoLabel: "Ver Demo",
          demoUrl: "https://drip-store-rouge.vercel.app/",
          githubLabel: "Código Fuente",
          githubUrl: "https://github.com/Lucho8/dripStore",
        },
        techiesTechstore: {
          name: "TechiesTechstore",
          description:
            "Una aplicación de comercio electrónico (SPA) rápida y dinámica desarrollada con React y Vite. Destaca por su arquitectura modular, la implementación de un manejo de estado global personalizado para el carrito de compras, y un diseño mobile-first altamente responsivo. ",
          tags: ["Vite", "Prisma", "Mercado Pago", "Tailwind"],
          demoLabel: "Ver Demo",
          demoUrl: "https://techies-techstore.vercel.app/",
          githubLabel: "Código Fuente",
          githubUrl: "https://github.com/Lucho8/TechiesTechstore",
        },
        interviewerAI: {
          name: "Interviewer AI",
          description:
            "Plataforma SaaS Fullstack para simular entrevistas técnicas con Inteligencia Artificial. Implementa una arquitectura RAG (Retrieval-Augmented Generation) con memoria vectorial (pgvector) permitiendo que la IA recuerde el progreso del candidato. Incluye análisis de CVs en PDF y un dashboard interactivo de métricas.",
          tags: [
            "Next.js 16",
            "RAG & Vector DB",
            "PostgreSQL",
            "Prisma",
            "Clerk Auth",
          ],
          demoLabel: "Ver Demo",
          demoUrl: "https://ai-interview-delta-two.vercel.app/",
          githubLabel: "Código Fuente",
          githubUrl: "https://github.com/Lucho8/ai-interview",
        },
      },
    },
    footer: { madeWith: "Creado con Next.js, Tailwind v4 y mucho café." },
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      badge: "Available for new opportunities",
      stack:
        "🛠️ Core Stack: Next.js | TypeScript | React | Tailwind CSS | PostgreSQL | Prisma",
      greeting: "Hi, I'm Luciano Fredes.",
      description:
        "Fullstack Engineer specializing in React ecosystems and Scalable Architectures. I am dedicated to developing complete, secure, and user-oriented platforms. My main focus is on Frontend development with Next.js and TypeScript, creating modular interfaces backed by robust backend integrations and relational databases. I build software with both the customer experience and business logic in mind, ensuring every deployment is production-ready.",
      cta: "View Projects",
    },
    projects: {
      sectionTitle: "Featured Projects",
      list: {
        dripStore: {
          name: "DripStore",
          description:
            "A scalable Fullstack e-commerce platform built with Next.js 16, TypeScript, and PostgreSQL (via Prisma). It features a customer-facing storefront with secure Stripe payment processing, and a comprehensive Admin Dashboard to manage inventory, track orders, and analyze sales metrics.",
          tags: ["Next.js 16", "Prisma", "Stripe", "Tailwind"],
          demoLabel: "Live Demo",
          demoUrl: "https://drip-store-rouge.vercel.app/",
          githubLabel: "Source Code",
          githubUrl: "https://github.com/Lucho8/dripStore",
        },
        techiesTechstore: {
          name: "TechiesTechstore",
          description:
            "A fast and dynamic Single Page Application (SPA) e-commerce built with React and Vite. It stands out for its modular architecture, custom global state management for the shopping cart, and a highly responsive, mobile-first design.",
          tags: ["Vite", "Prisma", "Mercado Pago", "Tailwind"],
          demoLabel: "Live Demo",
          demoUrl: "https://techies-techstore.vercel.app/",
          githubLabel: "Source Code",
          githubUrl: "https://github.com/Lucho8/TechiesTechstore",
        },
        interviewerAI: {
          name: "Interviewer AI",
          description:
            "A Fullstack SaaS platform for simulating technical interviews using Artificial Intelligence. It implements a RAG (Retrieval-Augmented Generation) architecture with vector memory (pgvector), allowing the AI to remember the candidate's past sessions. Features include PDF resume parsing and an interactive metrics dashboard.",
          tags: [
            "Next.js 16",
            "RAG & Vector DB",
            "PostgreSQL",
            "Prisma",
            "Clerk Auth",
          ],
          demoLabel: "Live Demo",
          demoUrl: "https://ai-interview-delta-two.vercel.app/",
          githubLabel: "Source Code",
          githubUrl: "https://github.com/Lucho8/ai-interview",
        },
      },
    },
    footer: {
      madeWith: "Built with Next.js, Tailwind v4, and lots of coffee.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
