import '@/styles/globals.css';
import { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';

import Header from '@/components/Header';

const robotoSlab = Roboto_Slab({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

export const metadata: Metadata = {
  authors: [{ name: 'Isaiah Chin' }],
  description: 'A Hollow Knight damage analysis tool',
  title: {
    default: `The Knight's Calculator`,
    template: `The Knight's Calculator | %s`,
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/favicon-32x32.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://isaiahchin.github.io/the-knights-calculator/',
    title: `The Knight's Calculator`,
    description: 'A Hollow Knight damage analysis tool',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-950 text-zinc-100">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${robotoSlab.className} overflow-x-hidden relative m-0 min-h-screen bg-zinc-950 bg-cover bg-top bg-no-repeat bg-fixed`}
      >
        <Header />
        <main className="flex flex-col md:contents w-full md:w-11/12 h-auto md:h-[11/12] px-4 md:p-0 mx-auto relative mb-4">
          {children}
        </main>
      </body>
    </html>
  );
}
