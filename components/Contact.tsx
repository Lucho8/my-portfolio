"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Mail,
  Terminal,
  Briefcase,
} from "lucide-react";


const FORMSPREE_URL = "https://formspree.io/f/xykvgpaw";

type Status = "idle" | "loading" | "success" | "error";

const INPUT_BASE =
  "w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-all duration-200 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const infoItems = [
    { Icon: MapPin, label: t.contact.location, color: "text-cyan-400" },
    {
      Icon: Mail,
      label: "lucianogonzalofredes@gmail.com",
      color: "text-emerald-400",
    },
    { Icon: Clock, label: t.contact.responseTime, color: "text-violet-400" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Lucho8",
      label: t.contact.github,
      Icon: Terminal,
      style:
        "hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:text-cyan-400",
    },
    {
      href: "https://www.linkedin.com/in/luciano-gonzalo-fredes-96b786192/",
      label: t.contact.linkedin,
      Icon: Briefcase,
      style:
        "hover:border-violet-500/40 hover:bg-violet-950/30 hover:text-violet-400",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
       
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
            <span className="text-zinc-500">contact --open</span>
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.contact.heading}
            <span className="ml-2 text-cyan-400">.</span>
          </h2>
          <div className="mt-4 h-px w-28 bg-linear-to-r from-cyan-500 via-emerald-400 to-transparent" />
        </motion.div>

     
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
         
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base leading-relaxed text-zinc-400">
              {t.contact.subtitle}
            </p>

            <div className="flex flex-col gap-4">
              {infoItems.map(({ Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <span className="text-sm text-zinc-400">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ href, label, Icon, style }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-200 ${style}`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
         
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/40">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100">
                        {t.contact.successTitle}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        {t.contact.successMessage}
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 font-mono text-xs text-zinc-600 underline-offset-4 hover:text-zinc-400 hover:underline transition-colors"
                    >
                      ← Enviar otro mensaje
                    </button>
                  </motion.div>
                )}

       
                {status !== "success" && (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                   
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2.5 rounded-lg border border-red-900/50 bg-red-950/40 px-4 py-3"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                          <p className="text-sm text-red-400">
                            {t.contact.errorMessage}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                 
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {t.contact.nameLabel}{" "}
                        <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className={INPUT_BASE}
                        disabled={status === "loading"}
                      />
                    </div>

                   
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {t.contact.emailLabel}{" "}
                        <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className={INPUT_BASE}
                        disabled={status === "loading"}
                      />
                    </div>

                  
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {t.contact.messageLabel}{" "}
                        <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.contact.messagePlaceholder}
                        className={`${INPUT_BASE} resize-none`}
                        disabled={status === "loading"}
                      />
                    </div>

                    
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-emerald-400 hover:shadow-cyan-400/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t.contact.sendingLabel}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          {t.contact.submitLabel}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
