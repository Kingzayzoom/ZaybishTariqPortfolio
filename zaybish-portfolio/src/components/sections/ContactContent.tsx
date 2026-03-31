"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactContent() {
  return (
    <div className="grid gap-10 pb-10 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="space-y-5">
          <p className="eyebrow">Contact</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Let&apos;s talk about what we could build together.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m looking for full-time software engineering roles, internships, and selective freelance work. If
            you have a team, product, or idea that needs someone who can handle both full-stack execution and ML-heavy
            thinking, I&apos;d love to hear about it.
          </p>
        </div>

        <div className="glass-panel p-6">
          <div className="space-y-3">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              <span className="inline-flex items-center gap-3">
                <Mail size={16} />
                {siteConfig.socials.email}
              </span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              <span className="inline-flex items-center gap-3">
                <LinkedinIcon size={16} />
                linkedin.com/in/zaybishtariq
              </span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              <span className="inline-flex items-center gap-3">
                <GithubIcon size={16} />
                github.com/kingzayzoom
              </span>
              <ArrowUpRight size={15} />
            </a>
            <div className="flex items-center rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground">
              <span className="inline-flex items-center gap-3">
                <MapPin size={16} />
                {siteConfig.location}, US Citizen
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="glass-panel p-6 sm:p-8"
      >
        <div className="mb-6 space-y-2">
          <p className="text-2xl font-semibold tracking-[-0.04em]">Send a message</p>
          <p className="text-sm text-muted-foreground">
            {formEndpoint
              ? "This form is wired for Formspree. Messages will post directly to your configured endpoint."
              : "Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to connect this form to Formspree. Until then, email is the fastest way to reach me."}
          </p>
        </div>

        <form action={formEndpoint || undefined} method="POST" className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border border-border/70 bg-background/65 px-4 py-3 text-sm outline-none transition focus:border-foreground/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-border/70 bg-background/65 px-4 py-3 text-sm outline-none transition focus:border-foreground/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full rounded-2xl border border-border/70 bg-background/65 px-4 py-3 text-sm outline-none transition focus:border-foreground/20"
              placeholder="Tell me a bit about the role, team, or project."
            />
          </div>

          <button type="submit" className="primary-button w-full justify-center">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
