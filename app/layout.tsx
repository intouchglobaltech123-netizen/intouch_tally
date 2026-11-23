import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Intouch',
    title: SITE.title,
    description: 'Explore TallyPrime with Intouch. Request a demo or pricing information.',
    images: [{ url: '/logo.png', width: 413, height: 120, alt: 'Intouch Globaltech' }],
  },
  icons: { icon: '/logo.png' },
};

export const viewport: Viewport = { themeColor: '#081A35', width: 'device-width', initialScale: 1 };

// Runs before first paint: skip the intro for returning visitors (same tab) and reduced-motion users.
// Append #intro to the URL to replay it.
const preScript = `try{var r=matchMedia('(prefers-reduced-motion: reduce)').matches,v=sessionStorage.getItem('it_seen')==='1';if(r||(v&&location.hash!=='#intro'))document.documentElement.classList.add('no-pre')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
