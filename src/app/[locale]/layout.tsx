// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import "./globals.css"

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  // unwrap params
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // fallback just in case
  if (!locale) throw new Error('Locale is undefined! Make sure the URL contains /en or /sv');

  const messages = await import(`../../../messages/${locale}.json`).then(m => m.default);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
