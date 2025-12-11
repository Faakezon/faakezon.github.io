"use client";

import Header from "./components/header";
import Title from "./components/title";
import Skill from "./components/skill";
import Reveal from "./components/reveal";
import ProjectsSection from "./components/Projects/projectsSection";
import LanguageSwitcher from "./components/languageSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 font-sans">
      <main className="relative flex min-h-screen w-full max-w-5xl flex-col items-center justify-start py-24 px-8 sm:items-start">
        
        {/* LANGUAGE SWITCHER IN TOP-RIGHT */}
        <div className="absolute top-6 right-6">
          <LanguageSwitcher />
        </div>

        <Reveal>
          <Header />
        </Reveal>

        <Reveal delay={0.5}>
          <section className="w-full mb-16">
            <Title title={t("aboutTitle")} />
            <p className="text-zinc-700 dark:text-zinc-400 leading-8 max-w-2xl text-lg">
              {t("aboutParagraph")}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.5}>
          <section className="w-full mb-16">
            <Title title={t("skillsTitle")} />
            <Reveal delay={0.5}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-zinc-700 dark:text-zinc-400 text-lg">
                {t.raw("skills").map((skill: string, i: number) => (
                  <Reveal key={skill} delay={i * 0.05}>
                    <Skill skill={skill} />
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </section>
        </Reveal>

        <ProjectsSection />

        <Reveal>
          <section className="w-full mb-24">
            <Title title={t("contactTitle")} />
            <p className="text-zinc-700 dark:text-zinc-400 mb-6 text-lg">
              {t("contactText")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${t("ContactButtons.emailUrl")}`}
                className="flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1.5 4.5a2 2 0 012-2h17a2 2 0 012 2v15a2 2 0 01-2 2h-17a2 2 0 01-2-2v-15zM3 5.25v13.5h18V5.25l-9 6-9-6z" />
                </svg>
                {t("ContactButtons.email")}
              </a>
              <a
                href={t("ContactButtons.linkedinUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.036 0 3.6 2.017 3.6 4.639v5.556z" />
                </svg>
                {t("ContactButtons.linkedin")}
              </a>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
