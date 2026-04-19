import React, { useState } from 'react';
import { FormInput, FormLabel, CtaButton } from '../components/UI';

const WRAP_TYPES = [
  { id: 'full',    name: 'Full Wrap',     price: 'From $2,500' },
  { id: 'partial', name: 'Partial',       price: 'From $800' },
  { id: 'color',   name: 'Color Change',  price: 'From $3,200' },
  { id: 'decals',  name: 'Decals',        price: 'From $150' },
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
          {WRAP_TYPES.map(({ id, name, price }) => (
            <div
              key={id}
              onClick={() => setSelectedWrap(id)}
              style={{
                background: selectedWrap === id ? '#2a1810' : '#1a1a1a',
                border: `1px solid ${selectedWrap === id ? 'var(--mgc-coral)' : '#1e1e1e'}`,
                borderLeft: `2px solid ${selectedWrap === id ? 'var(--mgc-coral)' : 'transparent'}`,
                borderRadius: '4px',
                padding: '14px 12px',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '13px', color: selectedWrap === id ? 'var(--mgc-white)' : '#C8B89A', fontWeight: '500', marginBottom: '3px' }}>{name}</div>
              <div style={{ fontSize: '10px', color: '#555' }}>{price}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={section}>
        <FormLabel>Upload Vehicle Photos</FormLabel>
        <div style={{
          background: '#1a1a1a',
          border: '1px dashed #2a2a2a',
          borderRadius: '4px',
          padding: '28px',
          textAlign: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '13px', color: 'var(--mgc-tan)', marginBottom: '4px' }}>Tap to upload photos</div>
          <div style={{ fontSize: '11px', color: '#444' }}>
            Driver side · Passenger side · Front · Rear
          </div>
        </div>
      </div>

      <div style={section}>
        <FormLabel>Upload Brand Assets (optional)</FormLabel>
        <div style={{
          background: '#1a1a1a',
          border: '1px dashed #2a2a2a',
          borderRadius: '4px',
          padding: '18px',
          textAlign: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '12px', color: 'var(--mgc-tan)' }}>Logo files, brand guidelines, or design inspiration</div>
          <div style={{ fontSize: '11px', color: '#444', marginTop: '4px' }}>AI, EPS, PDF, PNG accepted</div>
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
