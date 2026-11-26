import { NextResponse } from 'next/server';
import { ENQUIRY_TYPES, isEmail, isIndianMobile } from '@/lib/site';

export const runtime = 'nodejs';

/**
 * Receives demo / pricing enquiries and emails them to Intouch via Resend (https://resend.com).
 * Required environment variables (server-side only, never exposed to the browser):
 *   RESEND_API_KEY      – Resend API key
 *   ENQUIRY_TO_EMAIL    – where enquiries are delivered (e.g. info@intouchglobaltech.com)
 *   ENQUIRY_FROM_EMAIL  – verified sender, e.g. "Intouch Website <enquiries@intouchglobaltech.com>"
 * If they are missing the route returns 503 and the form shows the email/phone fallback —
 * it never reports a fake success.
 */

type Body = Record<string, unknown>;

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const HTML_ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c] ?? c);

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Spam protection: honeypot field and minimum fill time. Bots get a quiet 200 and nothing is sent.
  if (str(body.website) || Number(body.elapsedMs) < 2500) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 });

  const data = {
    name: str(body.name, 100),
    business: str(body.business, 150),
    phone: str(body.phone, 20),
    email: str(body.email, 150),
    businessType: str(body.businessType, 80),
    size: str(body.size, 80),
    users: str(body.users, 40),
    contactMethod: str(body.contactMethod, 40),
    enquiryType: str(body.enquiryType, 80),
    message: str(body.message, 1500),
    source: str(body.source, 40),
  };

  const errors: string[] = [];
  if (!data.name) errors.push('name');
  if (!isIndianMobile(data.phone)) errors.push('phone');
  if (!isEmail(data.email)) errors.push('email');
  if (!(ENQUIRY_TYPES as readonly string[]).includes(data.enquiryType)) errors.push('enquiryType');
  if (data.source === 'demoForm' && !data.business) errors.push('business');
  if (body.consent !== true) errors.push('consent');
  if (errors.length) return NextResponse.json({ error: 'validation', fields: errors }, { status: 422 });

  const { RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    console.error('[enquiry] Email delivery is not configured (RESEND_API_KEY / ENQUIRY_TO_EMAIL / ENQUIRY_FROM_EMAIL).');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const rows: [string, string][] = [
    ['Enquiry type', data.enquiryType],
    ['Full name', data.name],
    ['Business name', data.business],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Business type', data.businessType],
    ['Business size', data.size],
    ['Number of users', data.users],
    ['Preferred contact', data.contactMethod],
    ['Message', data.message],
    ['Form', data.source],
  ];
  const filled = rows.filter(([, v]) => v);
  const html = `<h2 style="font-family:sans-serif">New TallyPrime website enquiry</h2><table style="font-family:sans-serif;border-collapse:collapse">${filled
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#5B6B85;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')}</table>`;
  const text = filled.map(([k, v]) => `${k}: ${v}`).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: ENQUIRY_FROM_EMAIL,
        to: ENQUIRY_TO_EMAIL.split(',').map((s) => s.trim()),
        reply_to: data.email,
        subject: `${data.enquiryType} — ${data.name}${data.business ? ` (${data.business})` : ''}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error('[enquiry] Resend error', res.status, await res.text());
      return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('[enquiry] Network error', err);
    return NextResponse.json({ error: 'delivery_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
