import React from 'react';

export function SectionTitle({ children, style }) {
  return (
    <div style={{
      fontSize: '11px',
      color: 'var(--mgc-tan-dark)',
      letterSpacing: '2px',
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
        background: 'var(--mgc-black-card)',
        border: '1px solid var(--mgc-black-border)',
        borderRadius: '14px',
        margin: '6px 20px',
        padding: '16px',
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
        borderRadius: '12px',
        padding: '16px',
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        letterSpacing: '0.5px',
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
    background: 'var(--mgc-black-card)',
    border: '1px solid var(--mgc-black-border)',
    borderRadius: '10px',
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
      fontSize: '11px',
      color: 'var(--mgc-tan-dark)',
      letterSpacing: '1px',
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
    coral: { background: 'var(--mgc-coral-bg)', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral-dark)' },
    green: { background: 'var(--mgc-green-bg)', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green-border)' },
    tan:   { background: '#2a2a2a', color: 'var(--mgc-tan)', border: '1px solid #333' },
  };
  return (
    <span style={{
      fontSize: '10px',
      fontWeight: '600',
      padding: '4px 10px',
      borderRadius: '20px',
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
      height: '4px',
      background: '#2a2a2a',
      borderRadius: '2px',
      margin: '12px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: `${percent}%`,
        background: percent >= 100 ? 'var(--mgc-green)' : 'var(--mgc-coral)',
        borderRadius: '2px',
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
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: done || current ? 'var(--mgc-coral)' : '#333',
              boxShadow: current ? '0 0 0 3px var(--mgc-coral-bg)' : 'none',
            }} />
            <div style={{
              fontSize: '9px',
              color: done || current ? 'var(--mgc-tan)' : '#666',
              textAlign: 'center',
              maxWidth: '52px',
            }}>
              {step}
            </div>
          </div>
        );
      })}
    </div>
  );
}
