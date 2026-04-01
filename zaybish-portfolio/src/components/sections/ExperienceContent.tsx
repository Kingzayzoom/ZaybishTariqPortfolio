"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { experiences } from "@/data/experience";

type ExperienceContentProps = {
  showIntro?: boolean;
};

const accentByType: Record<string, string> = {
  externship: "border-cyan-400/20 bg-[linear-gradient(180deg,rgba(16,32,44,0.88),rgba(13,14,17,0.98))]",
  internship: "border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(38,20,34,0.88),rgba(13,14,17,0.98))]",
  fellowship: "border-white/10 bg-[linear-gradient(180deg,rgba(19,19,22,0.92),rgba(12,12,15,0.98))]",
  education: "border-[#a84e2f]/40 bg-[linear-gradient(180deg,rgba(85,19,33,0.38),rgba(17,17,19,0.97))]",
};

export function ExperienceContent({ showIntro = true }: ExperienceContentProps) {
  const majorExperiences = experiences.filter(
    (experience) => experience.type === "externship" || experience.type === "internship"
  );
  const fellowshipExperiences = experiences.filter((experience) => experience.type === "fellowship");
  const educationExperience = experiences.find((experience) => experience.type === "education");

  return (
    <section className="space-y-10">
      {showIntro && (
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <p className="eyebrow">Experience</p>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Experience that already feels like real engineering work.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Internships, externships, fellowship communities, and coursework that show how I build, learn quickly,
              and keep expanding my range as a software engineer.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="eyebrow !tracking-[0.22em]">Focus</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">Software engineering</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">With AI systems depth when the product calls for it.</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="eyebrow !tracking-[0.22em]">Current</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">2 active technical programs</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Hands-on work across product engineering and document intelligence.</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="eyebrow !tracking-[0.22em]">Community</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">ColorStack + MLT</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Professional communities shaping how I grow and lead in tech.</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="eyebrow !tracking-[0.22em]">Professional Work</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative space-y-8 md:pl-32">
          <div className="absolute bottom-0 left-[3.35rem] top-0 hidden w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] md:block" />

          {majorExperiences.map((experience, index) => {
            const isInternship = experience.type === "internship";

            return (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative"
              >
                <div className="hidden md:absolute md:left-[-8rem] md:top-8 md:block">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-mono uppercase tracking-[0.22em] ${
                        isInternship
                          ? "border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-200"
                          : "border-cyan-400/30 bg-cyan-400/12 text-cyan-200"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p className="max-w-[6rem] text-center font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <div className={`glass-panel overflow-hidden p-0 ${accentByType[experience.type]}`}>
                  <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex gap-4">
                          {experience.logo && (
                            <div className="relative h-15 w-15 overflow-hidden rounded-2xl border border-white/12 bg-white/95 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
                              <Image
                                src={experience.logo.src}
                                alt={experience.logo.alt}
                                fill
                                unoptimized
                                sizes="60px"
                                className="object-contain p-2"
                              />
                            </div>
                          )}

                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] ${
                                  isInternship
                                    ? "border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200"
                                    : "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                                }`}
                              >
                                {experience.type}
                              </span>
                              {experience.status === "active" && (
                                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-200">
                                  Active
                                </span>
                              )}
                            </div>

                            <div>
                              <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{experience.role}</p>
                              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                                <span>{experience.company}</span>
                                <span className="hidden text-slate-600 sm:inline">|</span>
                                <span className="inline-flex items-center gap-1.5 text-slate-400">
                                  <MapPin size={14} /> {experience.location}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500 md:hidden">
                          {experience.date}
                        </p>
                      </div>

                      <ul className="mt-6 space-y-4">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isInternship ? "bg-fuchsia-300" : "bg-cyan-300"}`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {experience.tech && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {experience.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-white/8 bg-black/12 p-6 lg:border-l lg:border-t-0 lg:p-7">
                      {experience.media && experience.media.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                          {experience.media.map((item, mediaIndex) => (
                            <motion.figure
                              key={item.src}
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: mediaIndex * 0.06 }}
                              className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-background/45"
                            >
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  unoptimized
                                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                                  className="object-cover transition duration-500 hover:scale-[1.03]"
                                />
                              </div>
                              <figcaption className="px-4 py-3 text-sm leading-relaxed text-slate-400">
                                {item.caption}
                              </figcaption>
                            </motion.figure>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-full min-h-56 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6">
                          <div>
                            <p className="eyebrow !tracking-[0.22em]">What This Represents</p>
                            <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                              Applied AI engineering in a real workflow setting.
                            </p>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                              <Sparkles size={16} className="text-cyan-300" />
                              OCR + retrieval + document intelligence
                            </div>
                            <p className="text-sm leading-relaxed text-slate-400">
                              A live externship focused on turning messy mortgage documents into structured, searchable
                              systems with Python, OCR, and RAG.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <p className="eyebrow !tracking-[0.22em]">Communities</p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-4">
            {fellowshipExperiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-panel p-5 ${accentByType.fellowship}`}
              >
                <div className="flex items-start gap-4">
                  {experience.logo && (
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-2">
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

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xl font-semibold tracking-[-0.04em] text-white">{experience.company}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          {experience.role} | {experience.location}
                        </p>
                      </div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                        {experience.date}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {educationExperience && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <p className="eyebrow !tracking-[0.22em]">Education</p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className={`glass-panel overflow-hidden p-0 ${accentByType.education}`}
            >
              <div className="relative">
                <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(229,117,61,0.16),transparent_72%)]" />
                <div className="relative p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {educationExperience.logo && (
                        <div className="relative h-18 w-18 overflow-hidden rounded-2xl border border-[#e5753d]/30 bg-white p-2 shadow-[0_16px_34px_rgba(0,0,0,0.14)]">
                          <Image
                            src={educationExperience.logo.src}
                            alt={educationExperience.logo.alt}
                            fill
                            unoptimized
                            sizes="72px"
                            className="object-contain p-2"
                          />
                        </div>
                      )}

                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#e5753d]/28 bg-[#5b1828]/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[#f7c7b2]">
                          <GraduationCap size={12} />
                          Education
                        </div>
                        <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                          {educationExperience.company}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                          {educationExperience.role} | {educationExperience.location}
                        </p>
                      </div>
                    </div>

                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f7c7b2]">
                      {educationExperience.date}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
                    <ul className="space-y-4">
                      {educationExperience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f38b52]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-[1.5rem] border border-[#e5753d]/18 bg-[#5b1828]/34 p-5">
                      <p className="eyebrow !tracking-[0.22em] !text-[#f7c7b2]">Academic Foundation</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {educationExperience.tech?.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#e5753d]/22 bg-[#6d2131]/40 px-3 py-1 text-xs text-[#f3d2c3]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        )}
      </div>
    </section>
  );
}
