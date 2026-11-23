'use client';

import { useEffect } from 'react';

/**
 * Page-level motion and wiring that spans several sections:
 * reveal-on-scroll, nav state, the hero window tilt, the pinned "How it works" story,
 * the getting-started progress line and "Book a Demo" routing. Renders nothing.
 */
export default function SiteEffects() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s);
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMob = () => window.innerWidth <= 1080;
    const cleanups: (() => void)[] = [];

    /* Reveal on scroll */
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    // Hero content reveals as the intro curtain lifts; everything else reveals on scroll.
    const heroRv = $$('.hero .rv');
    $$('.rv')
      .filter((el) => !el.closest('.hero'))
      .forEach((el) => io.observe(el));
    const revealHero = () => heroRv.forEach((el) => io.observe(el));
    const root = document.documentElement;
    if (root.dataset.ready || root.classList.contains('no-pre') || !document.getElementById('pre')) revealHero();
    else {
      window.addEventListener('intouch:ready', revealHero, { once: true });
      cleanups.push(() => window.removeEventListener('intouch:ready', revealHero));
    }
    cleanups.push(() => io.disconnect());

    /* Story */
    const stLis = $$('#steps li');
    const stCards = $$('.st-card');
    const setStep = (i: number) => {
      stLis.forEach((l, j) => l.classList.toggle('on', j <= i));
      stCards.forEach((c, j) => c.classList.toggle('on', j === i));
      const prog = $('#prog');
      if (prog) prog.style.height = `calc(${(i / 4) * 100}% - ${(i / 4) * 20}px)`;
      $('#stClose')?.classList.toggle('on', i === 4);
    };
    const progress = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return Math.min(0.999, Math.max(0, -r.top / (el.offsetHeight - window.innerHeight)));
    };
    const inView = (el: Element | null) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const nav = $('#nav');
    const app = $('#heroApp');
    const secIds = ['product', 'features', 'how', 'why', 'mobile', 'faqs'];
    const darkIds = ['why', 'footer'];

    const update = () => {
      const y = window.scrollY;
      nav?.classList.toggle('sc', y > 20);
      nav?.classList.toggle(
        'dk',
        darkIds.some((id) => {
          const r = document.getElementById(id)?.getBoundingClientRect();
          return !!r && r.top < 36 && r.bottom > 36;
        }),
      );
      $('#mcta')?.classList.toggle('show', y > 600 && !inView($('#demo')));

      let cur = '';
      secIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      });
      $$('.links a').forEach((a) => a.classList.toggle('act', a.getAttribute('href') === '#' + cur));

      // Hero window leans back slightly and straightens as you scroll
      if (app && !RM) app.style.setProperty('--tilt', `${isMob() ? 0 : 10 * (1 - Math.min(1, y / (window.innerHeight * 0.55)))}deg`);

      const st = $('#stWrap');
      if (st && !isMob()) setStep(Math.floor(progress(st) * 5));

      const gs = $('#gs');
      const fill = $('#gsFill');
      if (gs && fill) {
        const r = gs.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - r.top) / (r.height + window.innerHeight * 0.2)));
        fill.style.width = p * 100 + '%';
      }
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    });
    update();

    /* Every "Book a Demo" / "Request Pricing" leads to the same form, pre-selecting the enquiry type */
    const demoClick = (e: MouseEvent) => {
      const t = (e.target as Element | null)?.closest?.<HTMLElement>('[data-demo]');
      if (!t) return;
      e.preventDefault();
      const sel = $<HTMLSelectElement>('#dEnq');
      if (sel && t.dataset.enq) sel.value = t.dataset.enq;
      $('#demo')?.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' });
      setTimeout(() => $<HTMLInputElement>('#dName')?.focus({ preventScroll: true }), RM ? 0 : 700);
    };
    document.addEventListener('click', demoClick);
    cleanups.push(() => document.removeEventListener('click', demoClick));

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
