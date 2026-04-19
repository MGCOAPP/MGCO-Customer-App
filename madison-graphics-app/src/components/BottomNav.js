import React from 'react';

const NAV_ITEMS = [
  { id: 'home',    icon: '🏠', label: 'Home' },
  { id: 'gallery', icon: '🖼️', label: 'Gallery' },
  { id: 'quote',   icon: '💰', label: 'Quote' },
  { id: 'track',   icon: '📍', label: 'Track' },
  { id: 'fleet',   icon: '🚛', label: 'Fleet' },
];

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    maxWidth: '430px',
    background: '#111',
    borderTop: '1px solid var(--mgc-black-border)',
    display: 'flex',
    zIndex: 100,
  },
  item: {
    flex: 1,
    padding: '10px 4px 14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  },
  icon: { fontSize: '20px' },
  label: (active) => ({
    fontSize: '9px',
    color: active ? 'var(--mgc-coral)' : '#666',
    letterSpacing: '0.5px',
    fontFamily: 'var(--font-body)',
  }),
};

export default function BottomNav({ current, navigate }) {
  return (
    <nav style={styles.nav}>
      {NAV_ITEMS.map(({ id, icon, label }) => {
        const active = current === id;
        return (
          <button
            key={id}
            style={styles.item}
            onClick={() => navigate(id)}
            aria-label={label}
          >
            <span style={styles.icon}>{icon}</span>
            <span style={styles.label(active)}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
