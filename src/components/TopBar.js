import React from 'react';

const styles = {
  bar: {
    background: 'var(--mgc-black)',
    padding: '14px 20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid var(--mgc-black-border)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  logoText: {
    fontFamily: 'var(--font-display)',
    fontSize: '22px',
    color: 'var(--mgc-coral)',
    letterSpacing: '2px',
  },
  logoSub: {
    fontSize: '8px',
    color: 'var(--mgc-tan)',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginTop: '-3px',
  },
  rightBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#2a2a2a',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontSize: '16px',
  },
  notifDot: {
    width: '8px',
    height: '8px',
    background: 'var(--mgc-coral)',
    borderRadius: '50%',
    position: 'absolute',
    top: '6px',
    right: '6px',
  },
};

export default function TopBar({ title, sub, isHome, notifCount, onBack, isDesktop }) {
  return (
    <div style={{
      ...styles.bar,
      padding: isDesktop ? '16px 28px 14px' : '14px 20px 10px',
    }}>
      <div>
        <div style={{
          ...styles.logoText,
          fontSize: isDesktop ? '26px' : '22px',
        }}>
          {title}
        </div>
        <div style={styles.logoSub}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {!isDesktop && !isHome && (
          <button style={styles.rightBtn} onClick={onBack} aria-label="Back">
            ✕
          </button>
        )}
        <button style={styles.rightBtn} aria-label="Notifications">
          🔔
          {notifCount > 0 && <div style={styles.notifDot} />}
        </button>
      </div>
    </div>
  );
}
