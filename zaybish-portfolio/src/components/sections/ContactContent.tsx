"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site-config";

export function ContactContent() {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s work<br />together.
        </h1>
        <p className="mb-10 leading-relaxed text-muted-foreground">
          I&apos;m looking for full-time SWE roles, internships, and freelance projects.
          Whether you have a specific opportunity or just want to connect — my inbox is open.
        </p>

        <div className="space-y-4">
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
              <Mail size={14} />
            </span>
            {siteConfig.socials.email}
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
              <LinkedinIcon size={14} />
            </span>
            linkedin.com/in/zaybishtariq
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
              <GithubIcon size={14} />
            </span>
            github.com/kingzayzoom
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border">
              <MapPin size={14} />
            </span>
            Crozet, Virginia (US Citizen)
          </div>
        </div>
      </motion.div>

      {/* Right — Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-5 rounded-2xl border border-border/50 bg-card p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:ring-0"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:ring-0"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Send Message
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Or email directly at{" "}
            <a href={`mailto:${siteConfig.socials.email}`} className="underline underline-offset-2">
              {siteConfig.socials.email}
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
