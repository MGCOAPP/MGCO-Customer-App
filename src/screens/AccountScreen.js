import React from 'react';
import { Card } from '../components/UI';
import Icon from '../components/Icons';

const MENU_ITEMS = [
  { icon: 'list',       label: 'Order History' },
  { icon: 'creditCard', label: 'Invoices & Payments' },
  { icon: 'bell',       label: 'Notifications' },
  { icon: 'building',   label: 'Company Details' },
  { icon: 'lock',       label: 'Change Password' },
  { icon: 'users',      label: 'Referral Program' },
  { icon: 'phone',      label: 'Contact Support' },
];

export default function AccountScreen() {
  return (
    <div>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            background: 'var(--mgc-coral)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            color: 'white',
            flexShrink: 0,
          }}>
            MG
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: '600', color: 'var(--mgc-white)' }}>Madison Graphics Co.</div>
            <div style={{ fontSize: '12px', color: 'var(--mgc-tan)' }}>Fleet Account · Sun Prairie, WI</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--mgc-black-border)', paddingTop: '12px' }}>
          {MENU_ITEMS.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 0',
                borderBottom: '1px solid #1f1f1f',
                cursor: 'pointer',
              }}
            >
              <div style={{ color: '#555', flexShrink: 0 }}>
                <Icon name={icon} size={17} />
              </div>
              <span style={{ fontSize: '14px', color: 'var(--mgc-white)', flex: 1 }}>{label}</span>
              <span style={{ color: '#333', fontSize: '16px' }}>›</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ padding: '8px 20px 20px', textAlign: 'center', fontSize: '11px', color: '#444' }}>
        Madison Graphics Company · v1.0.0
      </div>
    </div>
  );
}
