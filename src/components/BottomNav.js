import React from 'react';

const Icon = ({ d, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path} />) : <path d={d} />}
  </svg>
);

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: ['M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z', 'M9 21V12h6v9'],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    icon: ['M3 3h18v18H3z', 'M3 9h18', 'M9 21V9'],
  },
  {
    id: 'quote',
    label: 'Quote',
    icon: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M8 13h8', 'M8 17h5'],
  },
  {
    id: 'track',
    label: 'Track',
    icon: ['M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z', 'M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  },
  {
    id: 'fleet',
    label: 'Fleet',
    icon: ['M1 3h15v13H1z', 'M16 8h4l3 3v5h-7V8z', 'M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z', 'M18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'],
  },
];

export default function BottomNav({ current, navigate }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      maxWidth: '430px',
      background: '#0d0d0d',
      borderTop: '1px solid #1e1e1e',
      display: 'flex',
      zIndex: 100,
    }}>
      {NAV_ITEMS.map(({ id, icon, label }) => {
        const active = current === id;
        return (
          <button
            key={id}
            onClick={() => navigate(id)}
            aria-label={label}
            style={{
              flex: 1,
              padding: '11px 4px 15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              color: active ? 'var(--mgc-coral)' : '#444',
              position: 'relative',
              transition: 'color 0.15s',
            }}
          >
            {active && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '2px',
                background: 'var(--mgc-coral)',
                borderRadius: '0 0 2px 2px',
              }} />
            )}
            <Icon d={icon} size={20} />
            <span style={{
              fontSize: '11px',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-display)',
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
