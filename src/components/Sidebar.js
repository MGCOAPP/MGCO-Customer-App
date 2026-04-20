import React, { useState } from 'react';

const Icon = ({ d, size = 18 }) => (
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
    label: 'Wrap Gallery',
    icon: ['M3 3h18v18H3z', 'M3 9h18', 'M9 21V9'],
  },
  {
    id: 'quote',
    label: 'Get a Quote',
    icon: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M8 13h8', 'M8 17h5'],
  },
  {
    id: 'track',
    label: 'Order Tracking',
    icon: ['M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z', 'M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  },
  {
    id: 'appt',
    label: 'Schedule',
    icon: ['M8 2v3', 'M16 2v3', 'M3 7h18', 'M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z', 'M8 12h.01', 'M12 12h.01', 'M16 12h.01', 'M8 16h.01', 'M12 16h.01'],
  },
  {
    id: 'fleet',
    label: 'My Fleet',
    icon: ['M1 3h15v13H1z', 'M16 8h4l3 3v5h-7V8z', 'M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z', 'M18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'],
  },
  {
    id: 'care',
    label: 'Wrap Care',
    icon: ['M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z'],
  },
  {
    id: 'account',
    label: 'My Account',
    icon: ['M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2', 'M12 11a4 4 0 100-8 4 4 0 000 8z'],
  },
];

export default function Sidebar({ current, navigate }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{
      width: '240px',
      flexShrink: 0,
      background: '#0d0d0d',
      borderRight: '1px solid #1e1e1e',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
      position: 'sticky',
      top: 0,
    }}>
      {/* Logo */}
      <div style={{
        padding: '20px 24px 18px',
        borderBottom: '1px solid #1e1e1e',
        display: 'flex',
        alignItems: 'center',
      }}>
        <img
          src="/logo.png"
          alt="Madison Graphics Company"
          style={{ width: '100%', maxWidth: '160px', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Nav Items */}
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {NAV_ITEMS.map(({ id, icon, label }) => {
          const active = current === id;
          return (
            <button
              key={id}
              onClick={() => navigate(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '6px',
                border: 'none',
                background: active ? 'rgba(216,90,48,0.15)' : hovered === id ? 'rgba(216,90,48,0.1)' : 'transparent',
                cursor: 'pointer',
                marginBottom: '2px',
                textAlign: 'left',
                color: active || hovered === id ? 'var(--mgc-coral)' : '#555',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <Icon d={icon} size={17} />
              </span>
              <span style={{
                fontSize: '13px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '1.5px',
                color: active || hovered === id ? 'var(--mgc-coral)' : '#777',
              }}>
                {label}
              </span>
              {active && (
                <div style={{
                  marginLeft: 'auto',
                  width: '3px',
                  height: '16px',
                  borderRadius: '2px',
                  background: 'var(--mgc-coral)',
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '18px 24px',
        borderTop: '1px solid #1e1e1e',
        fontSize: '11px',
        color: '#333',
        fontFamily: 'var(--font-body)',
        lineHeight: 1.8,
      }}>
        <div>608-318-1711</div>
        <div>Sun Prairie, WI</div>
      </div>
    </div>
  );
}
