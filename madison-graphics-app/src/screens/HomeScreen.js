import React from 'react';
import { SectionTitle, Card, ProgressBar, OrderSteps, StatusBadge } from '../components/UI';

const ORDER_STEPS = ['Ordered', 'Design', 'Print', 'Install', 'Ready'];

const quickActions = [
  { id: 'quote',   icon: '💰', label: 'Get a Quote',    sub: 'Upload your vehicle' },
  { id: 'track',   icon: '📍', label: 'Track Order',    sub: 'In production' },
  { id: 'gallery', icon: '🖼️', label: 'Wrap Gallery',   sub: 'Browse designs' },
  { id: 'appt',    icon: '📅', label: 'Schedule',       sub: 'Book drop-off' },
  { id: 'fleet',   icon: '🚛', label: 'My Fleet',       sub: '4 vehicles' },
  { id: 'care',    icon: '✨', label: 'Wrap Care',      sub: 'Protect your wrap' },
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
        <div style={{ fontSize: '13px', color: 'var(--mgc-tan)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Welcome back
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--mgc-white)', letterSpacing: '1px', lineHeight: 1 }}>
          LARGER THAN LIFE<br />GRAPHICS
        </div>
        <div style={{ fontSize: '13px', color: 'var(--mgc-tan)', marginTop: '6px' }}>
          1320 N Bristol St, Sun Prairie, WI
        </div>
        <button
          onClick={() => navigate('track')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--mgc-coral)',
            color: 'white',
            fontSize: '11px',
            fontWeight: '600',
            padding: '5px 12px',
            borderRadius: '20px',
            marginTop: '10px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span style={{ width: '7px', height: '7px', background: 'white', borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
          1 Order In Progress — View Status
        </button>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }`}</style>

      {/* Quick Actions */}
      <SectionTitle>Quick Actions</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '4px 20px' }}>
        {quickActions.map(({ id, icon, label, sub }) => (
          <div
            key={id}
            onClick={() => navigate(id)}
            style={{
              background: 'var(--mgc-black-card)',
              border: '1px solid var(--mgc-black-border)',
              borderRadius: '12px',
              padding: '16px 14px',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--mgc-white)' }}>{label}</div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <SectionTitle>Recent Projects</SectionTitle>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--mgc-tan)' }}>#MGC-2024-0419</div>
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
            <div style={{ fontSize: '12px', color: 'var(--mgc-tan)' }}>#MGC-2024-0312 · Completed Mar 15</div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--mgc-white)', marginTop: '2px' }}>2022 Chevy Silverado — Partial Wrap</div>
          </div>
          <StatusBadge variant="green">COMPLETE</StatusBadge>
        </div>
        <ProgressBar percent={100} />
      </Card>
    </div>
  );
}
