// pages/index.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { Reveal } from "@/components/reveal"; // adjust path if necessary
import { githubLoader } from "@/components/githubLoader";



export default function RootRedirect() {
  const [size, setSize] = useState(64);

  useEffect(() => {
    const startSize = 24;
    const endSize = 128;
    const duration = 800;

    let startTime: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const eased = easeOutCubic(progress); // apply easing
      const current = startSize + (endSize - startSize) * eased;

      setSize(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/sv";
    }, 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting…</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 font-sans px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 tracking-wide">
              Omdirigerar till Svensk version…
            </p>

            <Image
              loader={githubLoader}
              src="/profile.jpg"
              alt="Profile photo"
              width={size}
              height={size}
              loading="eager"
              priority
              className="relative -top-45 rounded-full border-4 border-indigo-200 dark:border-indigo-700 shadow-lg animate-bounce"
            />
          </div>
        </Reveal>
      </div>
    </>
  );
}
