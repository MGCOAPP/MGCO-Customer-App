import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';

const FILTERS = ['All', 'Full Wrap', 'Partial', 'Fleet', 'Color Change', 'Decals'];

const GALLERY_ITEMS = [
  { label: 'Sprinter Van — Full Wrap',    tag: 'FLEET',   icon: '🚐', bg: 'linear-gradient(135deg,#1a1a1a,#2a1810)' },
  { label: 'Box Truck — Color Change',    tag: null,      icon: '🚚', bg: 'linear-gradient(135deg,#111,#1a2010)' },
  { label: 'Sedan — Chrome Wrap',         tag: 'NEW',     icon: '🚗', bg: 'linear-gradient(135deg,#1a1010,#2a1010)' },
  { label: 'Sports Car — Matte Black',    tag: null,      icon: '🏎️', bg: 'linear-gradient(135deg,#0d0d1a,#1a1530)' },
  { label: 'Semi Truck — Partial',        tag: 'FLEET',   icon: '🚛', bg: 'linear-gradient(135deg,#111518,#1a2530)' },
  { label: 'SUV — Color Change Gloss',    tag: null,      icon: '🚙', bg: 'linear-gradient(135deg,#1a1508,#2a2210)' },
  { label: 'Cargo Van — Full Wrap',       tag: 'FLEET',   icon: '🚐', bg: 'linear-gradient(135deg,#1a1a20,#202030)' },
  { label: 'Pickup Truck — Partial',      tag: null,      icon: '🛻', bg: 'linear-gradient(135deg,#201510,#2a1a0a)' },
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
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              border: '1px solid',
              borderColor: activeFilter === f ? 'var(--mgc-coral)' : '#333',
              background: activeFilter === f ? 'var(--mgc-coral)' : 'var(--mgc-black-card)',
              color: activeFilter === f ? 'white' : '#999',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <SectionTitle>Featured Work</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '4px 20px 20px' }}>
        {GALLERY_ITEMS.map(({ label, tag, icon, bg }, i) => (
          <div
            key={i}
            style={{
              borderRadius: '10px',
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
            <span style={{ fontSize: '44px' }}>{icon}</span>
            {tag && (
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                background: 'var(--mgc-coral)',
                color: 'white',
                fontSize: '9px',
                fontWeight: '600',
                padding: '3px 7px',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
              }}>
                {tag}
              </div>
            )}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
              padding: '20px 10px 8px',
              fontSize: '11px',
              color: 'var(--mgc-tan-light)',
              fontWeight: '500',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
