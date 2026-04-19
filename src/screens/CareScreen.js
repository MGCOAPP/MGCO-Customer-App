import React from 'react';
import { Card, CtaButton } from '../components/UI';

const CARE_ITEMS = [
  {
    icon: '🚿',
    title: 'Washing Your Wrap',
    body: 'Wait at least 2 weeks after install before washing. Use touchless car washes or hand wash with a pH-neutral soap. Rinse with low-pressure water.',
    do: 'Hand Wash',
    dont: 'Pressure Wash',
  },
  {
    icon: '☀️',
    title: 'Sun & Heat Exposure',
    body: 'Park in shade or a garage when possible. Prolonged UV exposure can cause fading. Use a UV-protectant spray designed for vinyl wraps.',
    do: 'Use UV Spray',
    dont: 'Direct Sun Storage',
  },
  {
    icon: '🧴',
    title: 'Cleaning Products',
    body: 'Only use products specifically designed for vinyl wraps. Avoid solvent-based cleaners, wax with PTFE, and any abrasive compounds.',
    do: 'Vinyl-Safe Cleaner',
    dont: 'Wax / Solvents',
  },
  {
    icon: '🌡️',
    title: 'Temperature & Winter',
    body: 'In winter, avoid scraping ice directly on the wrap. Use a soft snow brush. Automatic washes with brushes can scratch the surface.',
    do: 'Soft Snow Brush',
    dont: 'Ice Scraper on Wrap',
  },
];

export default function CareScreen() {
  return (
    <div>
      {CARE_ITEMS.map(({ icon, title, body, do: doTip, dont }) => (
        <Card key={title}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{ fontSize: '22px' }}>{icon}</span>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)' }}>{title}</div>
          </div>
          <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>{body}</div>
          <div style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '6px', background: 'var(--mgc-green-bg)', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green-border)' }}>
              ✓ DO: {doTip}
            </span>
            <span style={{ fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '6px', background: 'var(--mgc-coral-bg)', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral-dark)' }}>
              ✗ AVOID: {dont}
            </span>
          </div>
        </Card>
      ))}

      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '22px' }}>📞</span>
          <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)' }}>Notice an Issue?</div>
        </div>
        <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.6, marginBottom: '4px' }}>
          Catching wrap issues early saves cost. If you notice lifting edges, bubbles, or color changes, contact us before it worsens.
        </div>
        <CtaButton style={{ marginTop: '12px', fontSize: '13px', padding: '12px' }}>
          Contact Madison Graphics
        </CtaButton>
      </Card>
    </div>
  );
}
