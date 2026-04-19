import React from 'react';
import { SectionTitle, Card, CtaButton } from '../components/UI';

const FLEET_VEHICLES = [
  {
    name: '2023 Ford Transit #1',
    detail: 'Full Wrap · Installed Jan 2024 · 15 months old',
    status: 'ACTIVE',
    statusStyle: { background: 'transparent', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green)' },
  },
  {
    name: '2023 Ford Transit #2',
    detail: 'Full Wrap · In Production Now',
    status: 'IN PROD',
    statusStyle: { background: 'transparent', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral)' },
  },
  {
    name: '2021 Chevy Express',
    detail: 'Partial Wrap · Installed Aug 2021 · 3+ years',
    status: 'REFRESH DUE',
    statusStyle: { background: 'transparent', color: 'var(--mgc-coral)', border: '1px solid var(--mgc-coral)' },
  },
  {
    name: '2022 Ram ProMaster',
    detail: 'Decals Only · Installed Mar 2023',
    status: 'ACTIVE',
    statusStyle: { background: 'transparent', color: 'var(--mgc-green)', border: '1px solid var(--mgc-green)' },
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
            background: '#1a1a1a',
            border: '1px solid #1e1e1e',
            borderRadius: '4px',
            padding: '14px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '22px', fontWeight: '600', color }}>{value}</div>
            <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </div>

      <SectionTitle>Fleet Vehicles</SectionTitle>
      {FLEET_VEHICLES.map(({ name, detail, status, statusStyle }) => (
        <div
          key={name}
          style={{
            background: '#1a1a1a',
            border: '1px solid #1e1e1e',
            borderLeft: '2px solid var(--mgc-coral)',
            borderRadius: '4px',
            margin: '6px 20px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)' }}>{name}</div>
            <div style={{ fontSize: '11px', color: '#555', marginTop: '3px' }}>{detail}</div>
          </div>
          <span style={{ fontSize: '9px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px', flexShrink: 0, ...statusStyle }}>
            {status}
          </span>
        </div>
      ))}

      <div style={{ padding: '8px 20px' }}>
        <CtaButton outline>+ Add Vehicle to Fleet</CtaButton>
      </div>

      <SectionTitle>Brand Assets</SectionTitle>
      <Card>
        <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--mgc-white)', marginBottom: '12px' }}>Stored Brand Files</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {BRAND_FILES.map(file => (
            <div key={file} style={{
              fontSize: '11px',
              background: 'transparent',
              color: 'var(--mgc-tan)',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '1px solid #2a2a2a',
            }}>
              {file}
            </div>
          ))}
        </div>
        <CtaButton outline style={{ marginTop: '12px', fontSize: '12px', padding: '10px' }}>
          + Upload New Asset
        </CtaButton>
      </Card>
    </div>
  );
}
