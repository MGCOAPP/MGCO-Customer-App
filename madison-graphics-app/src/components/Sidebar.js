import React from 'react';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home' },
  { id: 'gallery', label: 'Wrap Gallery' },
  { id: 'quote',   label: 'Get a Quote' },
  { id: 'track',   label: 'Order Tracking' },
  { id: 'appt',    label: 'Schedule' },
  { id: 'fleet',   label: 'My Fleet' },
  { id: 'care',    label: 'Wrap Care' },
  { id: 'account', label: 'My Account' },
];

export default function Sidebar({ current, navigate }) {
  return (
    <div style={{
      width: '260px',
      flexShrink: 0,
      background: '#0a0a0a',
      borderRight: '1px solid #1e1e1e',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
      position: 'sticky',
      top: 0,
    }}>
      <div style={{ padding: '28px 24px 24px', borderBottom: '1px solid #1e1e1e' }}>
        <img src="/logo.png" alt="Madison Graphics" style={{ maxWidth: '160px', display: 'block' }} />
      </div>

      <nav style={{ flex: 1, padding: '8px 0' }}>
        {NAV_ITEMS.map(({ id, label }) => {
          const active = current === id;
          return (
            <button
              key={id}
              onClick={() => navigate(id)}
              className="sidebar-nav-btn"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '12px 24px',
                border: 'none',
                borderLeft: active ? '2px solid #D85A30' : '2px solid transparent',
                background: 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontSize: '13px',
                fontWeight: active ? '600' : '400',
                color: active ? '#D85A30' : '#555',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.3px',
              }}>
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      <div style={{ padding: '16px 24px', borderTop: '1px solid #1e1e1e', fontSize: '11px', color: '#444' }}>
        <div>608-318-1711</div>
        <div style={{ marginTop: '2px' }}>Sun Prairie, WI</div>
      </div>
    </div>
  );
}
