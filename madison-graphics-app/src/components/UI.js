import React from 'react';

export function SectionTitle({ children, style }) {
  return (
    <div style={{
      fontSize: '9px',
      color: 'var(--mgc-tan-dark)',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      padding: '16px 20px 8px',
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Card({ children, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#1a1a1a',
        border: '1px solid #1e1e1e',
        borderRadius: '6px',
        margin: '6px 20px',
        padding: '20px',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CtaButton({ children, onClick, outline, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        background: outline ? 'transparent' : 'var(--mgc-coral)',
        color: outline ? 'var(--mgc-coral)' : 'white',
        border: outline ? '1px solid var(--mgc-coral)' : 'none',
        borderRadius: '4px',
        padding: '12px 16px',
        fontSize: '13px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginTop: '8px',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function FormInput({ placeholder, value, onChange, type = 'text', rows, style }) {
  const base = {
    width: '100%',
    background: '#1a1a1a',
    border: '1px solid #1e1e1e',
    borderRadius: '4px',
    padding: '12px 14px',
    fontSize: '14px',
    color: 'var(--mgc-white)',
    fontFamily: 'var(--font-body)',
    ...style,
  };

  if (rows) {
    return (
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ ...base, resize: 'none' }}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={base}
    />
  );
}

export function FormLabel({ children }) {
  return (
    <label style={{
      fontSize: '9px',
      color: 'var(--mgc-tan-dark)',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginBottom: '8px',
      display: 'block',
    }}>
      {children}
    </label>
  );
}

export function StatusBadge({ children, variant = 'coral' }) {
  const variants = {
    coral: { background: 'transparent', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral)' },
    green: { background: 'transparent', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green)' },
    tan:   { background: 'transparent', color: 'var(--mgc-tan)',   border: '1px solid var(--mgc-tan)' },
  };
  return (
    <span style={{
      fontSize: '9px',
      fontWeight: '600',
      padding: '3px 8px',
      borderRadius: '4px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      flexShrink: 0,
      ...variants[variant],
    }}>
      {children}
    </span>
  );
}

export function ProgressBar({ percent }) {
  return (
    <div style={{
      height: '1px',
      background: '#2a2a2a',
      borderRadius: '1px',
      margin: '12px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: `${percent}%`,
        background: percent >= 100 ? 'var(--mgc-green)' : 'var(--mgc-coral)',
        borderRadius: '1px',
        transition: 'width 0.8s ease',
      }} />
    </div>
  );
}

export function OrderSteps({ steps, currentStep }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {steps.map((step, i) => {
        const done = i < currentStep;
        const current = i === currentStep;
        return (
          <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: done || current ? 'var(--mgc-coral)' : '#2a2a2a',
              boxShadow: current ? '0 0 0 2px var(--mgc-coral-bg)' : 'none',
            }} />
            <div style={{
              fontSize: '9px',
              color: done || current ? 'var(--mgc-tan)' : '#444',
              textAlign: 'center',
              maxWidth: '52px',
              letterSpacing: '0.5px',
            }}>
              {step}
            </div>
          </div>
        );
      })}
    </div>
  );
}
