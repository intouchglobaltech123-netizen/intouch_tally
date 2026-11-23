'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const LINKS = [
  ['#product', 'Product'],
  ['#features', 'Features'],
  ['#how', 'How It Works'],
  ['#why', 'Why Tally'],
  ['#mobile', 'Livekeeping'],
  ['#faqs', 'FAQs'],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  const toggle = useCallback((o: boolean) => {
    setOpen(o);
    document.body.style.overflow = o ? 'hidden' : '';
    if (o) setTimeout(() => menu.current?.querySelector('a')?.focus(), 50);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        toggle(false);
        burger.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, toggle]);

  return (
    <>
      <a href="#main" className="sr" style={{ position: 'absolute' }}>
        Skip to content
      </a>
      <header className="nav" id="nav">
        <div className="nav-in">
          <nav className="nav-bar" aria-label="Primary">
            <a href="#top" className="logo" aria-label="Intouch home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Intouch Globaltech" width={152} height={44} />
            </a>
            <div className="links">
              {LINKS.map(([href, label]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-r">
              <button className="btn btn-p btn-sm btn-d" data-demo>
                Book a Demo
              </button>
              <button
                ref={burger}
                className={`burger${open ? ' x' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mnav"
                onClick={() => toggle(!open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div
        ref={menu}
        className={`mnav${open ? ' open' : ''}`}
        id="mnav"
        aria-label="Mobile"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a,button')) toggle(false);
        }}
      >
        {LINKS.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <button className="btn btn-p" data-demo>
          Book a Demo
        </button>
      </div>
    </>
  );
}
