"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // assuming /[locale]/page
    router.push(segments.join('/'));
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLocale('en')}
        className={locale === 'en' ? 'font-bold' : ''}
      >
        English
      </button>
      <button
        onClick={() => changeLocale('sv')}
        className={locale === 'sv' ? 'font-bold' : ''}
      >
        Svenska
      </button>
    </div>
  );
}
