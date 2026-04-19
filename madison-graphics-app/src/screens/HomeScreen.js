import React from 'react';
import { SectionTitle, Card, ProgressBar, OrderSteps, StatusBadge } from '../components/UI';

const ORDER_STEPS = ['Ordered', 'Design', 'Print', 'Install', 'Ready'];

const quickActions = [
  { id: 'quote',   label: 'Get a Quote',    sub: 'Upload your vehicle' },
  { id: 'track',   label: 'Track Order',    sub: 'In production' },
  { id: 'gallery', label: 'Wrap Gallery',   sub: 'Browse designs' },
  { id: 'appt',    label: 'Schedule',       sub: 'Book drop-off' },
  { id: 'fleet',   label: 'My Fleet',       sub: '4 vehicles' },
  { id: 'care',    label: 'Wrap Care',      sub: 'Protect your wrap' },
];

export default function HomeScreen({ navigate }) {
  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1810 100%)',
        padding: '24px 20px 20px',
        borderBottom: '2px solid var(--mgc-coral)',
      }}>
        <div style={{ fontSize: '9px', color: 'var(--mgc-tan)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>
          Welcome back
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', color: 'var(--mgc-white)', letterSpacing: '1px', lineHeight: 1 }}>
          BUILT ON <span style={{ color: 'var(--mgc-coral)' }}>CRAFT.</span><br />BACKED BY 3M.
        </div>
        <div style={{ fontSize: '13px', color: 'var(--mgc-tan)', marginTop: '6px' }}>
          1320 N Bristol St, Sun Prairie, WI
        </div>
        <button
          onClick={() => navigate('track')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            color: 'var(--mgc-coral)',
            fontSize: '10px',
            fontWeight: '600',
            padding: '5px 12px',
            borderRadius: '4px',
            marginTop: '12px',
            border: '1px solid var(--mgc-coral)',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: '5px', height: '5px', background: 'var(--mgc-coral)', borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
          1 Order In Progress — View Status
        </button>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }`}</style>

      {/* Quick Actions */}
      <SectionTitle>Quick Actions</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px', padding: '4px 20px' }}>
        {quickActions.map(({ id, label, sub }) => (
          <div
            key={id}
            onClick={() => navigate(id)}
            style={{
              background: '#1a1a1a',
              borderLeft: '2px solid var(--mgc-coral)',
              borderTop: '1px solid #1e1e1e',
              borderRight: '1px solid #1e1e1e',
              borderBottom: '1px solid #1e1e1e',
              borderRadius: '4px',
              padding: '16px 14px',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: '500', color: '#C8B89A' }}>{label}</div>
            <div style={{ fontSize: '11px', color: '#555', marginTop: '3px' }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <SectionTitle>Recent Projects</SectionTitle>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '9px', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>#MGC-2024-0419</div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--mgc-white)', marginTop: '2px' }}>2023 Ford Transit — Full Wrap</div>
          </div>
          <StatusBadge variant="coral">IN PRODUCTION</StatusBadge>
        </div>
        <ProgressBar percent={62} />
        <OrderSteps steps={ORDER_STEPS} currentStep={2} />
      </Card>

      <Card style={{ opacity: 0.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '9px', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>#MGC-2024-0312 · Completed Mar 15</div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--mgc-white)', marginTop: '2px' }}>2022 Chevy Silverado — Partial Wrap</div>
          </div>
          <StatusBadge variant="green">COMPLETE</StatusBadge>
        </div>
        <ProgressBar percent={100} />
      </Card>
    </div>
  );
}
