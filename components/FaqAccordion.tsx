'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/content';

/** Accessible accordion — only one answer open at a time. */
export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="acc">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`qi${isOpen ? ' open' : ''}`}>
            <h3 style={{ fontSize: 'inherit' }}>
              <button
                id={`qb${i}`}
                aria-expanded={isOpen}
                aria-controls={`qa${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <i aria-hidden="true" />
              </button>
            </h3>
            <div className="qa" id={`qa${i}`} role="region" aria-labelledby={`qb${i}`}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
