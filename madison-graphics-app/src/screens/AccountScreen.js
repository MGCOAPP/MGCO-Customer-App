import React from 'react';
import { Card } from '../components/UI';

const MENU_ITEMS = [
  { label: 'Order History' },
  { label: 'Invoices & Payments' },
  { label: 'Notifications' },
  { label: 'Company Details' },
  { label: 'Change Password' },
  { label: 'Referral Program' },
  { label: 'Contact Support' },
];

export default function AccountScreen() {
  return (
    <div>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--mgc-coral)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            color: 'white',
            flexShrink: 0,
            letterSpacing: '1px',
          }}>
            MG
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: '600', color: 'var(--mgc-white)' }}>Madison Graphics Co.</div>
            <div style={{ fontSize: '11px', color: '#555', marginTop: '2px', letterSpacing: '1px', textTransform: 'uppercase' }}>Fleet Account · Sun Prairie, WI</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '12px' }}>
          {MENU_ITEMS.map(({ label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                borderBottom: '1px solid #1a1a1a',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--mgc-white)' }}>{label}</span>
              <span style={{ color: '#444', fontSize: '14px' }}>›</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ padding: '8px 20px 20px', textAlign: 'center', fontSize: '9px', color: '#333', letterSpacing: '2px', textTransform: 'uppercase' }}>
        Madison Graphics Company · v1.0.0
      </div>
    </div>
  );
}
