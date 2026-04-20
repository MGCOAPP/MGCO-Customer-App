import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';

const FILTERS = ['All', 'Full Wrap', 'Partial', 'Fleet', 'Bus Wrap', 'Oversize'];

const GALLERY_ITEMS = [
  // Full Wraps
  { label: 'Vehicle Full Wrap',        filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_7330-scaled.jpg' },
  { label: 'Full Color Wrap',          filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/1_1_1-scaled.jpg' },
  { label: 'Custom Full Wrap',         filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/4-scaled.jpg' },
  { label: 'Full Wrap Design',         filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/4_4-scaled.jpg' },
  { label: 'Full Vehicle Wrap',        filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_1093-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_9918-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_0659-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_6039-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/5_5_5-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2695-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2872-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/1-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/2.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_4044-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/3.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_9886-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/5-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_8408-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_7401-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/1_1-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/3_3-scaled.jpg' },
  { label: 'Full Wrap',                filter: 'Full Wrap', src: 'https://msngraphics.com/wp-content/uploads/2024/08/5_5-scaled.jpg' },

  // Partial Wraps
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/95479080_3953419094698172_1208079613515792384_n.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/121015152_4701743266532414_6502871181541535548_n.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_4459-scaled.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_4362-scaled.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2739-scaled.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_0267-scaled.jpg' },
  { label: 'Partial Wrap',             filter: 'Partial',   src: 'https://msngraphics.com/wp-content/uploads/2024/08/2_2.jpg' },

  // Fleet
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_4873-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_5132-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2071-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2729-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_7487-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_5867-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_7046-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2811-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_0711-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_8250-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2410-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_7910-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_1641-scaled.jpg' },
  { label: 'Fleet Wrap',               filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_1614-scaled.jpg' },
  { label: 'Fleet Graphics',           filter: 'Fleet',     src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_6195-scaled.jpg' },

  // Bus Wraps
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2326-scaled.jpg' },
  { label: 'Custom Bus Wrap',          filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-5-1.webp' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2742-scaled.jpg' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-7-1.webp' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2740-scaled.jpg' },
  { label: 'Custom Bus Wrap',          filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-12-1.webp' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-31.webp' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-10-1.webp' },
  { label: 'Custom Bus Wrap',          filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-3-1.webp' },
  { label: 'Bus Wrap',                 filter: 'Bus Wrap',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Custom-Bus-Wraps-9.webp' },

  // Oversize
  { label: 'Oversize Wrap',            filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_2681-scaled.jpg' },
  { label: 'Large Format Wrap',        filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_1834-scaled.jpg' },
  { label: 'Oversize Wrap',            filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_4209-scaled.jpg' },
  { label: 'Large Format Wrap',        filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_6353-scaled.jpg' },
  { label: 'Oversize Wrap',            filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_9548-scaled.jpg' },
  { label: 'Large Format Wrap',        filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/08/IMG_0988-scaled.jpg' },
  { label: 'Oversize Wrap',            filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Oversize-Wrap-Projects-19.webp' },
  { label: 'Large Format Wrap',        filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Oversize-Wrap-Projects-32.webp' },
  { label: 'Oversize Wrap',            filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Oversize-Wrap-Projects-12.webp' },
  { label: 'Large Format Wrap',        filter: 'Oversize',  src: 'https://msngraphics.com/wp-content/uploads/2024/07/Madison-Graphics-Oversize-Wrap-Projects-35.webp' },
];

export default function GalleryScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [failedSrcs, setFailedSrcs] = useState(new Set());

  const visible = GALLERY_ITEMS.filter(item =>
    (activeFilter === 'All' || item.filter === activeFilter) && !failedSrcs.has(item.src)
  );

  return (
    <div>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', padding: '4px 20px 20px' }}>
        {visible.map(({ label, src }, i) => (
          <div
            key={src + i}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: '#1a1a1a',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <img
              src={src}
              alt={label}
              onError={() => setFailedSrcs(prev => new Set([...prev, src]))}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
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
