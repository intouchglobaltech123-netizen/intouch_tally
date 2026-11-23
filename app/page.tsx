import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import SiteEffects from '@/components/SiteEffects';
import Hero from '@/components/sections/Hero';
import Product from '@/components/sections/Product';
import Features from '@/components/sections/Features';
import Story from '@/components/sections/Story';
import Audience from '@/components/sections/Audience';
import Livekeeping from '@/components/sections/Livekeeping';
import WhyTally from '@/components/sections/WhyTally';
import GetStarted from '@/components/sections/GetStarted';
import Pricing from '@/components/sections/Pricing';
import Faqs from '@/components/sections/Faqs';
import FinalCta from '@/components/sections/FinalCta';
import DemoBooking from '@/components/sections/DemoBooking';
import Footer from '@/components/sections/Footer';
import { SITE } from '@/lib/site';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Intouch',
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  telephone: SITE.phoneHref,
};

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main id="main">
        <Hero />
        <Product />
        <Features />
        <Story />
        <Audience />
        <Livekeeping />
        <WhyTally />
        <GetStarted />
        <Pricing />
        <Faqs />
        <FinalCta />
        <DemoBooking />
      </main>
      <Footer />
      <SiteEffects />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </>
  );
}
