import React from 'react';

const styles = {
  bar: {
    background: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1e1e1e',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  title: {
    fontFamily: 'var(--font-display)',
    color: 'var(--mgc-coral)',
    letterSpacing: '2px',
  },
  sub: {
    fontSize: '8px',
    color: '#4a3a2a',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginTop: '-2px',
  },
  circleBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'transparent',
    border: '1px solid #2a2a2a',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0,
  },
  notifDot: {
    width: '6px',
    height: '6px',
    background: 'var(--mgc-coral)',
    borderRadius: '50%',
  },
};

export default function TopBar({ title, sub, isHome, notifCount, onBack, isDesktop }) {
  return (
    <div style={{
      ...styles.bar,
      padding: isDesktop ? '16px 28px 14px' : '14px 20px 10px',
    }}>
      <div>
        <div style={{ ...styles.title, fontSize: isDesktop ? '26px' : '22px' }}>
          {title}
        </div>
        <div style={styles.sub}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {!isDesktop && !isHome && (
          <button style={styles.circleBtn} onClick={onBack} aria-label="Back">
            <span style={{ fontSize: '11px', color: '#666' }}>✕</span>
          </button>
        )}
        <button style={styles.circleBtn} aria-label="Notifications">
          {notifCount > 0 && <div style={styles.notifDot} />}
        </button>
      </div>
    </div>
  );
}
