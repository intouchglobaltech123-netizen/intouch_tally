import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy | Intouch', alternates: { canonical: '/privacy' } };

// NOTE: Placeholder summary — replace with Intouch's full, legally reviewed policy before launch.
export default function Privacy() {
  return (
    <main className="legal">
      <Link href="/" className="back">← Back to home</Link>
      <h1>Privacy Policy</h1>
      <p>This page explains how Intouch handles information submitted through this website.</p>
      <h2>What we collect</h2>
      <p>When you submit an enquiry, we receive the details you enter: your name, business name, phone number, email address and any optional information such as business type, number of users or a message.</p>
      <h2>How we use it</h2>
      <p>We use these details only to respond to your TallyPrime or Livekeeping enquiry, for example to arrange a demonstration or share licensing information.</p>
      <h2>Sharing</h2>
      <p>We do not sell your information. It is processed by the service providers that deliver our website and email.</p>
      <h2>Your choices</h2>
      <p>To update or delete your details, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </main>
  );
}
