import React from 'react';
import { SectionTitle, Card, ProgressBar, OrderSteps, StatusBadge } from '../components/UI';

const ORDER_STEPS = ['Ordered', 'Design', 'Print', 'Install', 'Ready'];

const ORDERS = [
  {
    id: '#MGC-2024-0419',
    label: 'Est. Apr 23',
    vehicle: '2023 Ford Transit — Full Wrap',
    status: 'PRINTING',
    statusVariant: 'coral',
    step: 2,
    percent: 62,
    update: {
      time: 'Apr 19, 9:14 AM',
      text: 'Your wrap design has been approved and sent to our large-format printer. Estimated install: April 22.',
    },
  },
  {
    id: '#MGC-2024-0312',
    label: 'Completed Mar 15',
    vehicle: '2022 Chevy Silverado — Partial Wrap',
    status: 'COMPLETE',
    statusVariant: 'green',
    step: 5,
    percent: 100,
    update: null,
    faded: true,
  },
];

export default function TrackScreen() {
  return (
    <div>
      <SectionTitle>Active Orders</SectionTitle>
      {ORDERS.map(order => (
        <Card key={order.id} style={{ opacity: order.faded ? 0.6 : 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '9px', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                {order.id} · {order.label}
              </div>
              <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--mgc-white)', marginTop: '2px' }}>{order.vehicle}</div>
            </div>
            <StatusBadge variant={order.statusVariant}>{order.status}</StatusBadge>
          </div>
          <ProgressBar percent={order.percent} />
          <OrderSteps steps={ORDER_STEPS} currentStep={order.step} />
          {order.update && (
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #1e1e1e' }}>
              <div style={{ fontSize: '9px', color: '#3a3a3a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Latest Update · {order.update.time}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--mgc-tan)', lineHeight: 1.6 }}>
                {order.update.text}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
