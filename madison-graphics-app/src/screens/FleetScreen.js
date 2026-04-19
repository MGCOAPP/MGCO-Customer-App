import React from 'react';
import { SectionTitle, Card, CtaButton } from '../components/UI';

const FLEET_VEHICLES = [
  {
    icon: '🚐',
    name: '2023 Ford Transit #1',
    detail: 'Full Wrap · Installed Jan 2024 · 15 months old',
    status: 'ACTIVE',
    statusStyle: { background: 'var(--mgc-green-bg)', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green-border)' },
  },
  {
    icon: '🚐',
    name: '2023 Ford Transit #2',
    detail: 'Full Wrap · In Production Now',
    status: 'IN PROD',
    statusStyle: { background: 'var(--mgc-coral-bg)', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral-dark)' },
  },
  {
    icon: '🚚',
    name: '2021 Chevy Express',
    detail: 'Partial Wrap · Installed Aug 2021 · 3+ years',
    status: 'REFRESH DUE',
    statusStyle: { background: 'var(--mgc-coral-bg)', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral-dark)' },
  },
  {
    icon: '🚙',
    name: '2022 Ram ProMaster',
    detail: 'Decals Only · Installed Mar 2023',
    status: 'ACTIVE',
    statusStyle: { background: 'var(--mgc-green-bg)', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green-border)' },
  },
];

const BRAND_FILES = ['Logo-Primary.ai', 'Brand-Guide.pdf', 'Colors.png'];

export default function FleetScreen() {
  return (
    <div>
      {/* Fleet Stats */}
      <div style={{ padding: '12px 20px 4px', display: 'flex', gap: '8px' }}>
        {[
          { value: '4', label: 'Vehicles', color: 'var(--mgc-coral)' },
          { value: '2', label: 'Active Wraps', color: 'var(--mgc-tan)' },
          { value: '1', label: 'Refresh Due', color: 'var(--mgc-green)' },
        ].map(({ value, label, color }) => (
          <div key={label} style={{
            flex: 1,
            background: 'var(--mgc-black-card)',
            border: '1px solid var(--mgc-black-border)',
            borderRadius: '10px',
            padding: '14px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '22px', fontWeight: '600', color }}>{value}</div>
            <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>

      <SectionTitle>Fleet Vehicles</SectionTitle>
      {FLEET_VEHICLES.map(({ icon, name, detail, status, statusStyle }) => (
        <div
          key={name}
          style={{
            background: 'var(--mgc-black-card)',
            border: '1px solid var(--mgc-black-border)',
            borderRadius: '14px',
            margin: '6px 20px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            background: 'var(--mgc-coral-bg)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            flexShrink: 0,
          }}>
            {icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)' }}>{name}</div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{detail}</div>
          </div>
          <span style={{ fontSize: '10px', fontWeight: '600', padding: '3px 9px', borderRadius: '10px', flexShrink: 0, ...statusStyle }}>
            {status}
          </span>
        </div>
      ))}

      <div style={{ padding: '8px 20px' }}>
        <CtaButton outline>+ Add Vehicle to Fleet</CtaButton>
      </div>

      <SectionTitle>Brand Assets</SectionTitle>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{ fontSize: '20px' }}>📁</span>
          <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)' }}>Stored Brand Files</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {BRAND_FILES.map(file => (
            <div key={file} style={{
              fontSize: '11px',
              background: '#2a2a2a',
              color: 'var(--mgc-tan)',
              padding: '5px 10px',
              borderRadius: '6px',
            }}>
              {file}
            </div>
          ))}
        </div>
        <CtaButton outline style={{ marginTop: '12px', fontSize: '13px', padding: '10px' }}>
          + Upload New Asset
        </CtaButton>
      </Card>
    </div>
  );
}
