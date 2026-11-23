'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { FEATURE_TABS } from '@/lib/content';

type Phase = 'in' | 'out' | 'pre';

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState<Phase>('in');
  const list = useRef<HTMLDivElement>(null);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    if (i === active) return;
    setActive(i);
    if (focus) btns.current[i]?.focus();
    const tl = list.current;
    const t = btns.current[i];
    if (tl && t) tl.scrollTo({ left: t.offsetLeft - (tl.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
  };

  // Fade the old preview out, swap content, then slide the new one in (300–500ms total).
  useEffect(() => {
    if (active === shown) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPhase('out');
    const t = setTimeout(
      () => {
        setShown(active);
        setPhase('pre');
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase('in')));
      },
      reduce ? 0 : 220,
    );
    return () => clearTimeout(t);
  }, [active, shown]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = FEATURE_TABS.length;
    const map: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  const tab = FEATURE_TABS[shown];

  return (
    <>
      <div className="tablist rv d3" role="tablist" aria-label="Product features" ref={list}>
        {FEATURE_TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              btns.current[i] = el;
            }}
            className="tab"
            role="tab"
            id={`tab-${t.id}`}
            aria-controls="feature-panel"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="panel-g" role="tabpanel" id="feature-panel" aria-labelledby={`tab-${FEATURE_TABS[active].id}`}>
        <div className="panel-txt">
          <h3>{tab.heading}</h3>
          <p>{tab.body}</p>
          <ul>
            {tab.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <button className="btn btn-g" data-demo>
            See it in a demo
          </button>
        </div>
        <div className="screen">
          <div
            className={`screen-body${phase === 'in' ? '' : ' ' + phase}`}
            // Static, trusted illustrative markup from lib/content.ts
            dangerouslySetInnerHTML={{ __html: tab.screenHtml }}
          />
        </div>
      </div>
    </>
  );
}
