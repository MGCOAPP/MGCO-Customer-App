import React, { useState } from 'react';
import { FormInput, FormLabel, CtaButton } from '../components/UI';
import Icon from '../components/Icons';

const WRAP_TYPES = [
  { id: 'full',    icon: 'fullWrap',    name: 'Full Wrap',    price: 'From $2,500' },
  { id: 'partial', icon: 'partialWrap', name: 'Partial',      price: 'From $800' },
  { id: 'color',   icon: 'colorChange', name: 'Color Change', price: 'From $3,200' },
  { id: 'decals',  icon: 'decal',       name: 'Decals',       price: 'From $250' },
];

const section = { padding: '12px 20px' };

export default function QuoteScreen() {
  const [selectedWrap, setSelectedWrap] = useState('full');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div>
      <div style={section}>
        <FormLabel>Vehicle Info</FormLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <FormInput placeholder="Year" value={year} onChange={e => setYear(e.target.value)} />
          <FormInput placeholder="Make" value={make} onChange={e => setMake(e.target.value)} />
        </div>
        <FormInput placeholder="Model / Trim" value={model} onChange={e => setModel(e.target.value)} style={{ marginBottom: '10px' }} />
        <FormInput placeholder="Company Name (optional)" value={company} onChange={e => setCompany(e.target.value)} />
      </div>

      <div style={section}>
        <FormLabel>Wrap Type</FormLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {WRAP_TYPES.map(({ id, icon, name, price }) => (
            <div
              key={id}
              onClick={() => setSelectedWrap(id)}
              style={{
                background: selectedWrap === id ? '#2a1810' : 'var(--mgc-black-card)',
                border: `1px solid ${selectedWrap === id ? 'var(--mgc-coral)' : 'var(--mgc-black-border)'}`,
                borderRadius: '10px',
                padding: '14px 10px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: selectedWrap === id ? 'var(--mgc-coral)' : '#555' }}>
                <Icon name={icon} size={22} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--mgc-white)', fontWeight: '500' }}>{name}</div>
              <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>{price}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={section}>
        <FormLabel>Upload Vehicle Photos</FormLabel>
        <div style={{
          background: 'var(--mgc-black-card)',
          border: '2px dashed #333',
          borderRadius: '12px',
          padding: '28px',
          textAlign: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: '#555' }}>
            <Icon name="camera" size={28} />
          </div>
          <div style={{ fontSize: '13px', color: 'var(--mgc-tan)' }}>Tap to upload photos</div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Driver side · Passenger side · Front · Rear
          </div>
        </div>
      </div>

      <div style={section}>
        <FormLabel>Upload Brand Assets (optional)</FormLabel>
        <div style={{
          background: 'var(--mgc-black-card)',
          border: '2px dashed #333',
          borderRadius: '12px',
          padding: '18px',
          textAlign: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '12px', color: 'var(--mgc-tan)' }}>Logo files, brand guidelines, or design inspiration</div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>AI, EPS, PDF, PNG accepted</div>
        </div>
      </div>

      <div style={section}>
        <FormLabel>Notes</FormLabel>
        <FormInput
          placeholder="Describe your vision, colors, or any special requirements..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={3}
        />
      </div>

      <div style={section}>
        <CtaButton>Submit Quote Request</CtaButton>
        <CtaButton outline style={{ marginTop: '8px' }}>
          Call 608-318-1711
        </CtaButton>
      </div>
    </div>
  );
}
