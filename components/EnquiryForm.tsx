'use client';

import { FormEvent, ReactNode, useEffect, useRef } from 'react';
import { isEmail, isIndianMobile, SITE } from '@/lib/site';

type Props = { id: string; className?: string; children: ReactNode };

/**
 * Wraps the enquiry form markup. Validates in the browser, then posts to /api/enquiry,
 * which emails Intouch. Success is only shown when the server confirms delivery.
 */
export default function EnquiryForm({ id, className, children }: Props) {
  const form = useRef<HTMLFormElement>(null);
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const fieldError = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const v = el.value.trim();
    if (el.required && !v) return 'This field is required.';
    if (el.dataset.phone !== undefined && v && !isIndianMobile(v)) return 'Enter a valid 10-digit Indian mobile number.';
    if (el.type === 'email' && v && !isEmail(v)) return 'Enter a valid email address.';
    return '';
  };

  const validate = () => {
    const f = form.current!;
    let first: HTMLElement | null = null;
    f.querySelectorAll<HTMLElement>('.f').forEach((wrap) => {
      const el = wrap.querySelector<HTMLInputElement>('input,select,textarea');
      const em = wrap.querySelector('.em');
      if (!el || !em) return;
      const msg = fieldError(el);
      wrap.classList.toggle('err', !!msg);
      em.textContent = msg;
      el.setAttribute('aria-invalid', String(!!msg));
      if (msg && !first) first = el;
    });
    const consent = f.querySelector<HTMLInputElement>('[name=consent]');
    const ce = f.querySelector('[data-consent-err]');
    if (consent && ce) {
      ce.textContent = consent.checked ? '' : 'Please confirm consent to be contacted.';
      if (!consent.checked && !first) first = consent;
    }
    (first as HTMLElement | null)?.focus();
    return !first;
  };

  // Clear a field's error as soon as it becomes valid (never steals focus).
  const onInput = (e: FormEvent<HTMLFormElement>) => {
    const el = e.target as HTMLInputElement;
    if (el.name === 'consent') {
      if (el.checked) form.current?.querySelector('[data-consent-err]')?.replaceChildren();
      return;
    }
    const wrap = el.closest('.f');
    if (!wrap?.classList.contains('err')) return;
    if (!fieldError(el)) {
      wrap.classList.remove('err');
      wrap.querySelector('.em')?.replaceChildren();
      el.setAttribute('aria-invalid', 'false');
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = form.current!;
    const status = f.querySelector<HTMLElement>('.status');
    const btn = f.querySelector<HTMLButtonElement>('[type=submit]');
    if (status) status.className = 'status';
    if (!validate()) return;

    const data = Object.fromEntries(new FormData(f).entries()) as Record<string, string>;
    const payload = { ...data, consent: data.consent === 'on', elapsedMs: Date.now() - mountedAt.current, source: id };

    btn?.classList.add('loading');
    if (btn) btn.disabled = true;
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      if (status) {
        status.className = 'status show ok';
        status.textContent = 'Thank you — your enquiry has been received. The Intouch team will be in touch soon.';
      }
      f.reset();
    } catch {
      if (status) {
        status.className = 'status show info';
        status.innerHTML = `We couldn't send your enquiry online right now. Please email <b>${SITE.email}</b> or call <b>${SITE.phone}</b> and we'll help you directly. Your details are still in the form.`;
      }
    } finally {
      btn?.classList.remove('loading');
      if (btn) btn.disabled = false;
    }
  };

  return (
    <form ref={form} id={id} className={className} noValidate onSubmit={onSubmit} onInput={onInput} onChange={onInput}>
      {children}
    </form>
  );
}
