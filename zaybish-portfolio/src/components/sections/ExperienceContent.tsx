"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

type ExperienceContentProps = {
  showIntro?: boolean;
};

export function ExperienceContent({ showIntro = true }: ExperienceContentProps) {
  return (
    <section className="space-y-6">
      {showIntro && (
        <div className="space-y-4">
          <p className="eyebrow">Experience</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Experience shaped by shipping, learning, and leading.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A growing body of work across internships, community, and technical programs, anchored by hands-on product
            building and real outcomes.
          </p>
        </div>
      )}

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                {experience.logo && (
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border/60 bg-background/55 p-2">
                    <Image
                      src={experience.logo.src}
                      alt={experience.logo.alt}
                      fill
                      unoptimized
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-2xl font-semibold tracking-[-0.04em]">{experience.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                </div>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{experience.date}</p>
            </div>

            <ul className="mt-5 space-y-3">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/80" />
                  {bullet}
                </li>
              ))}
            </ul>

            {experience.tech && (
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {experience.media && experience.media.length > 0 && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {experience.media.map((item) => (
                  <figure
                    key={item.src}
                    className="overflow-hidden rounded-[1.35rem] border border-border/60 bg-background/45"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        unoptimized
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
