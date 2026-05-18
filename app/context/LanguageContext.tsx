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
    cvLabel: string;   
  };
  projects: {
    sectionTitle: string;
    list: {
      dripStore: {
        name: string; description: string; tags: string[];
        demoLabel: string; demoUrl: string; githubLabel: string; githubUrl: string;
      };
      techiesTechstore: {
        name: string; description: string; tags: string[];
        demoLabel: string; demoUrl: string; githubLabel: string; githubUrl: string;
      };
      interviewerAI: {
        name: string; description: string; tags: string[];
        demoLabel: string; demoUrl: string; githubLabel: string; githubUrl: string;
      };
      stockFlow: {
        name: string; description: string; tags: string[];
        demoLabel: string; demoUrl: string; githubLabel: string; githubUrl: string;
      };
    };
  };
  contact: {
    heading: string;
    subtitle: string;
    location: string;
    responseTime: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sendingLabel: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    github: string;
    linkedin: string;
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
      stack: "🛠️ Core Stack: Next.js | TypeScript | React | Tailwind CSS | PostgreSQL | Prisma",
      cta: "Ver Proyectos",
      cvLabel: "Descargar CV",
    },
    projects: {
      sectionTitle: "Proyectos Destacados",
      list: {
        dripStore: {
          name: "DripStore",
          description:
            "Una plataforma e-commerce Fullstack escalable construida con Next.js 16, TypeScript y PostgreSQL (vía Prisma). Incluye una tienda para clientes con procesamiento de pagos seguros mediante Stripe y un panel de administración completo para gestionar inventario, órdenes y analizar métricas de ventas.",
          tags: ["Next.js 16", "Prisma", "Stripe", "Tailwind"],
          demoLabel: "Ver Demo", demoUrl: "https://drip-store-rouge.vercel.app/",
          githubLabel: "Código Fuente", githubUrl: "https://github.com/Lucho8/dripStore",
        },
        techiesTechstore: {
          name: "TechiesTechstore",
          description:
            "Una aplicación de comercio electrónico (SPA) rápida y dinámica desarrollada con React y Vite. Destaca por su arquitectura modular, la implementación de un manejo de estado global personalizado para el carrito de compras, y un diseño mobile-first altamente responsivo.",
          tags: ["Vite", "Prisma", "Mercado Pago", "Tailwind"],
          demoLabel: "Ver Demo", demoUrl: "https://techies-techstore.vercel.app/",
          githubLabel: "Código Fuente", githubUrl: "https://github.com/Lucho8/TechiesTechstore",
        },
        interviewerAI: {
          name: "Interviewer AI",
          description:
            "Plataforma SaaS Fullstack para simular entrevistas técnicas con Inteligencia Artificial. Implementa una arquitectura RAG con memoria vectorial (pgvector) permitiendo que la IA recuerde el progreso del candidato. Incluye análisis de CVs en PDF y un dashboard interactivo de métricas.",
          tags: ["Next.js 16", "RAG & Vector DB", "PostgreSQL", "Prisma", "Clerk Auth"],
          demoLabel: "Ver Demo", demoUrl: "https://ai-interview-delta-two.vercel.app/",
          githubLabel: "Código Fuente", githubUrl: "https://github.com/Lucho8/ai-interview",
        },
        stockFlow: {
          name: "StockFlow",
          description:
            "Sistema de gestión de inventario Fullstack con arquitectura desacoplada. Construido con una API REST robusta en .NET 10 (C#) y un frontend moderno en React/Next.js. Implementa autenticación JWT, Entity Framework Core y despliegue en la nube (Vercel y Render).",
          tags: [".NET 10", "C#", "React", "JWT", "Tailwind"],
          demoLabel: "Ver Demo", demoUrl: "https://stockflow-client-snowy.vercel.app",
          githubLabel: "Código Fuente", githubUrl: "https://github.com/Lucho8/stockflow-api",
        },
      },
    },
    contact: {
      heading: "Hablemos de código",
      subtitle: "Abierto a nuevas oportunidades y proyectos interesantes. Escribime y charlamos.",
      location: "Buenos Aires, Argentina",
      responseTime: "Respondo en menos de 24hs",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Hola Luciano, me interesa charlar sobre...",
      submitLabel: "Enviar mensaje",
      sendingLabel: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successMessage: "Gracias por escribirme. Te respondo lo antes posible.",
      errorMessage: "Algo salió mal. Intentá de nuevo o escribime directamente.",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: { madeWith: "Construido con Next.js, Tailwind v4 y mucho café." },
  },

  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      badge: "Available for new opportunities",
      greeting: "Hi, I'm Luciano Fredes.",
      description:
        "Fullstack Engineer specializing in React ecosystems and Scalable Architectures. I am dedicated to developing complete, secure, and user-oriented platforms. My main focus is on Frontend development with Next.js and TypeScript, creating modular interfaces backed by robust backend integrations and relational databases. I build software with both the customer experience and business logic in mind, ensuring every deployment is production-ready.",
      stack: "🛠️ Core Stack: Next.js | TypeScript | React | Tailwind CSS | PostgreSQL | Prisma",
      cta: "View Projects",
      cvLabel: "Download CV",
    },
    projects: {
      sectionTitle: "Featured Projects",
      list: {
        dripStore: {
          name: "DripStore",
          description:
            "A scalable Fullstack e-commerce platform built with Next.js 16, TypeScript, and PostgreSQL (via Prisma). It features a customer-facing storefront with secure Stripe payment processing, and a comprehensive Admin Dashboard to manage inventory, track orders, and analyze sales metrics.",
          tags: ["Next.js 16", "Prisma", "Stripe", "Tailwind"],
          demoLabel: "Live Demo", demoUrl: "https://drip-store-rouge.vercel.app/",
          githubLabel: "Source Code", githubUrl: "https://github.com/Lucho8/dripStore",
        },
        techiesTechstore: {
          name: "TechiesTechstore",
          description:
            "A fast and dynamic Single Page Application (SPA) e-commerce built with React and Vite. It stands out for its modular architecture, custom global state management for the shopping cart, and a highly responsive, mobile-first design.",
          tags: ["Vite", "Prisma", "Mercado Pago", "Tailwind"],
          demoLabel: "Live Demo", demoUrl: "https://techies-techstore.vercel.app/",
          githubLabel: "Source Code", githubUrl: "https://github.com/Lucho8/TechiesTechstore",
        },
        interviewerAI: {
          name: "Interviewer AI",
          description:
            "A Fullstack SaaS platform for simulating technical interviews using Artificial Intelligence. It implements a RAG architecture with vector memory (pgvector), allowing the AI to remember the candidate's past sessions. Features PDF resume parsing and an interactive metrics dashboard.",
          tags: ["Next.js 16", "RAG & Vector DB", "PostgreSQL", "Prisma", "Clerk Auth"],
          demoLabel: "Live Demo", demoUrl: "https://ai-interview-delta-two.vercel.app/",
          githubLabel: "Source Code", githubUrl: "https://github.com/Lucho8/ai-interview",
        },
        stockFlow: {
          name: "StockFlow",
          description:
            "Fullstack inventory management system with a decoupled architecture. Built with a robust REST API in .NET 10 (C#) and a modern React/Next.js frontend. Implements secure JWT auth, Entity Framework Core, and cloud deployment on Vercel and Render.",
          tags: [".NET 10", "C#", "React", "JWT", "Tailwind"],
          demoLabel: "Live Demo", demoUrl: "https://stockflow-client-snowy.vercel.app",
          githubLabel: "Source Code", githubUrl: "https://github.com/Lucho8/stockflow-api",
        },
      },
    },
    contact: {
      heading: "Let's talk code",
      subtitle: "Open to new opportunities and interesting projects. Reach out and let's chat.",
      location: "Buenos Aires, Argentina",
      responseTime: "I reply within 24 hours",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Hi Luciano, I'm interested in chatting about...",
      submitLabel: "Send message",
      sendingLabel: "Sending...",
      successTitle: "Message sent!",
      successMessage: "Thanks for reaching out. I'll get back to you as soon as possible.",
      errorMessage: "Something went wrong. Please try again or email me directly.",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: { madeWith: "Built with Next.js, Tailwind v4, and lots of coffee." },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));
  const value = { language, toggleLanguage, t: translations[language] };
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}