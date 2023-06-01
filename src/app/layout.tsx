import '../styles/globals.css';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

export const metadata: Metadata = {
  authors: [{ name: 'Isaiah Chin' }],
  description: 'A Hollow Knight damage analysis tool',
  title: `The Knight's Calculator`,
  icons: [
    { rel: 'apple-touch-icon', url: '/favicon-32x32.png' },
    { rel: 'icon', url: '/favicon-32x32.png' },
  ],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <body
        className={`${robotoSlab.className} overflow-x-hidden m-0 mx-auto min-h-screen bg-zinc-950 bg-cover bg-top bg-no-repeat bg-fixed`}
      >
        <div
          id="bg-overlay"
          className="w-screen h-screen flex flex-col backdrop-blur-[2px] backdrop-brightness-[0.6]"
        >
          <Navigation />
          <main className="flex flex-1 flex-row m-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
