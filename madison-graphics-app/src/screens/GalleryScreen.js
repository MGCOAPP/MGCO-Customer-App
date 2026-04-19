import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';

const FILTERS = ['All', 'Full Wrap', 'Partial', 'Fleet', 'Color Change', 'Decals'];

const GALLERY_ITEMS = [
  { label: 'Sprinter Van — Full Wrap',    tag: 'FLEET',   bg: 'linear-gradient(135deg,#1a1a1a,#2a1810)' },
  { label: 'Box Truck — Color Change',    tag: null,      bg: 'linear-gradient(135deg,#111,#1a2010)' },
  { label: 'Sedan — Chrome Wrap',         tag: 'NEW',     bg: 'linear-gradient(135deg,#1a1010,#2a1010)' },
  { label: 'Sports Car — Matte Black',    tag: null,      bg: 'linear-gradient(135deg,#0d0d1a,#1a1530)' },
  { label: 'Semi Truck — Partial',        tag: 'FLEET',   bg: 'linear-gradient(135deg,#111518,#1a2530)' },
  { label: 'SUV — Color Change Gloss',    tag: null,      bg: 'linear-gradient(135deg,#1a1508,#2a2210)' },
  { label: 'Cargo Van — Full Wrap',       tag: 'FLEET',   bg: 'linear-gradient(135deg,#1a1a20,#202030)' },
  { label: 'Pickup Truck — Partial',      tag: null,      bg: 'linear-gradient(135deg,#201510,#2a1a0a)' },
];

export default function GalleryScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', padding: '12px 20px 4px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              flexShrink: 0,
              padding: '5px 14px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              border: '1px solid',
              borderColor: activeFilter === f ? 'var(--mgc-coral)' : '#2a2a2a',
              background: 'transparent',
              color: activeFilter === f ? 'var(--mgc-coral)' : '#555',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <SectionTitle>Featured Work</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', padding: '4px 20px 20px' }}>
        {GALLERY_ITEMS.map(({ label, tag, bg }, i) => (
          <div
            key={i}
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: bg,
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {tag && (
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                background: 'transparent',
                color: 'var(--mgc-coral)',
                border: '1px solid var(--mgc-coral)',
                fontSize: '8px',
                fontWeight: '600',
                padding: '2px 6px',
                borderRadius: '2px',
                letterSpacing: '1px',
                fontFamily: 'var(--font-body)',
              }}>
                {tag}
              </div>
            )}
            <div style={{
              fontSize: '12px',
              color: '#C8B89A',
              fontWeight: '500',
              textAlign: 'center',
              padding: '0 16px',
              letterSpacing: '0.5px',
              lineHeight: 1.4,
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
