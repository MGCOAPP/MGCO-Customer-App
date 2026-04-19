import React from 'react';

const NAV_ITEMS = [
  { id: 'home',    icon: '🏠', label: 'Home' },
  { id: 'gallery', icon: '🖼️', label: 'Wrap Gallery' },
  { id: 'quote',   icon: '💰', label: 'Get a Quote' },
  { id: 'track',   icon: '📍', label: 'Order Tracking' },
  { id: 'appt',    icon: '📅', label: 'Schedule' },
  { id: 'fleet',   icon: '🚛', label: 'My Fleet' },
  { id: 'care',    icon: '✨', label: 'Wrap Care' },
  { id: 'account', icon: '👤', label: 'My Account' },
];

export default function Sidebar({ current, navigate }) {
  return (
    <div style={{
      width: '220px',
      flexShrink: 0,
      background: '#0f0f0f',
      borderRight: '1px solid #2a2a2a',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
      position: 'sticky',
      top: 0,
    }}>
      {/* Logo */}
      <div style={{
        padding: '24px 20px 20px',
        borderBottom: '1px solid #2a2a2a',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '24px',
          color: 'var(--mgc-coral)',
          letterSpacing: '2px',
          lineHeight: 1,
        }}>
          Madison<br />Graphics
        </div>
        <div style={{
          fontSize: '8px',
          color: 'var(--mgc-tan)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginTop: '4px',
        }}>
          Company
        </div>
      </div>

      {/* Nav Items */}
      <nav style={{ flex: 1, padding: '12px 10px' }}>
        {NAV_ITEMS.map(({ id, icon, label }) => {
          const active = current === id;
          return (
            <button
              key={id}
              onClick={() => navigate(id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '10px',
                border: 'none',
                background: active ? 'var(--mgc-coral-bg)' : 'transparent',
                cursor: 'pointer',
                marginBottom: '2px',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '18px', width: '22px', textAlign: 'center' }}>{icon}</span>
              <span style={{
                fontSize: '13px',
                fontWeight: active ? '600' : '400',
                color: active ? 'var(--mgc-coral)' : '#888',
                fontFamily: 'var(--font-body)',
              }}>
                {label}
              </span>
              {active && (
                <div style={{
                  marginLeft: 'auto',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--mgc-coral)',
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid #2a2a2a',
        fontSize: '11px',
        color: '#444',
      }}>
        <div>608-318-1711</div>
        <div style={{ marginTop: '2px' }}>Sun Prairie, WI</div>
      </div>
    </div>
  );
}
