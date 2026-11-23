import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Terms & Conditions | Intouch', alternates: { canonical: '/terms' } };

// NOTE: Placeholder summary — replace with Intouch's full, legally reviewed terms before launch.
export default function Terms() {
  return (
    <main className="legal">
      <Link href="/" className="back">← Back to home</Link>
      <h1>Terms &amp; Conditions</h1>
      <p>Content on this website is provided for general information about TallyPrime and Livekeeping.</p>
      <h2>Product information</h2>
      <p>Product interface visuals are illustrative mockups with sample data and are not actual product screenshots. Licensing, plans, pricing and availability are confirmed by Intouch on enquiry.</p>
      <h2>Trademarks</h2>
      <p>TallyPrime and Tally are trademarks of Tally Solutions Pvt. Ltd. Livekeeping is a trademark of its respective owner. Intouch does not own or develop either product.</p>
    </main>
  );
}
