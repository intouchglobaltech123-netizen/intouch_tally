'use client';

import { useEffect, useRef, useState } from 'react';

/** Exit starts this many ms after navigation start (whole intro ≈ 2.2s). */
const EXIT_AT = 1300;
/** Matches the CSS failsafe on #pre (3s): past this point the overlay is already hidden. */
const FAILSAFE_AT = 2900;

/**
 * Simple intro: the logo, a slim progress line and the tagline.
 * On exit the line and tagline fade, the logo glides into its place in the navigation,
 * then the page fades in around it.
 *
 * Never blocks the page:
 *  - an inline script in <head> skips it for returning visitors (same tab) and reduced-motion users
 *  - a CSS failsafe hides it after 3s even if JavaScript never runs
 * Append #intro to the URL to replay it.
 */
export default function Preloader() {
  const [gone, setGone] = useState(false);
  const pre = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const ready = () => {
      root.dataset.ready = '1';
      window.dispatchEvent(new Event('intouch:ready'));
    };
    try {
      sessionStorage.setItem('it_seen', '1');
    } catch {}

    const el = pre.current;
    if (!el || root.classList.contains('no-pre')) {
      setGone(true);
      ready();
      return;
    }

    const timers: number[] = [];
    const exit = () => {
      if (performance.now() > FAILSAFE_AT) {
        setGone(true);
        ready();
        return;
      }
      el.style.animation = 'none'; // cancel the CSS failsafe

      // Glide the logo onto the navigation logo (FLIP), then swap to the real one.
      const logo = el.querySelector<HTMLElement>('.pre-logo');
      const target = document.querySelector<HTMLElement>('.nav .logo img');
      if (logo && target) {
        const a = logo.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        if (a.height && b.height) {
          const dx = b.left + b.width / 2 - (a.left + a.width / 2);
          const dy = b.top + b.height / 2 - (a.top + a.height / 2);
          logo.style.animation = 'none';
          logo.animate([{ transform: 'none' }, { transform: `translate(${dx}px, ${dy}px) scale(${b.height / a.height})` }], {
            duration: 650,
            easing: 'cubic-bezier(.65,0,.25,1)',
            fill: 'forwards',
          });
          root.classList.add('pre-flying');
        }
      }
      el.classList.add('exit');
      timers.push(window.setTimeout(ready, 450)); // the page fades in once the logo has settled
      timers.push(
        window.setTimeout(() => {
          root.classList.remove('pre-flying');
          setGone(true);
        }, 900),
      );
    };

    timers.push(window.setTimeout(exit, Math.max(0, EXIT_AT - performance.now())));
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      root.classList.remove('pre-flying');
    };
  }, []);

  if (gone) return null;

  return (
    <div id="pre" ref={pre} aria-hidden="true">
      <div className="pre-bg" />
      <div className="pre-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pre-logo" src="/logo.png" alt="" width={165} height={48} />
        <div className="pre-c">
          <span className="pre-bar">
            <i />
          </span>
          <p className="pre-tag">Business, beautifully balanced.</p>
        </div>
      </div>
    </div>
  );
}
