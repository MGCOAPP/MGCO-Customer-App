import React, { useState } from 'react';
import { SectionTitle, CtaButton } from '../components/UI';
import Icon from '../components/Icons';

const APPT_TYPES = [
  { id: 'dropoff', icon: 'arrowDown', name: 'Drop-Off' },
  { id: 'pickup',  icon: 'arrowUp',   name: 'Pick-Up' },
  { id: 'consult', icon: 'message',   name: 'Consultation' },
  { id: 'tour',    icon: 'eye',       name: 'Shop Tour' },
];

const DATES = [
  { dow: 'Mon', num: 21, disabled: true },
  { dow: 'Tue', num: 22 },
  { dow: 'Wed', num: 23 },
  { dow: 'Thu', num: 24 },
  { dow: 'Fri', num: 25 },
  { dow: 'Mon', num: 28 },
  { dow: 'Tue', num: 29 },
];

const TIMES = [
  { label: '8:00 AM',  booked: true },
  { label: '9:00 AM',  booked: false },
  { label: '10:00 AM', booked: false },
  { label: '11:00 AM', booked: false },
  { label: '1:00 PM',  booked: true },
  { label: '2:00 PM',  booked: false },
  { label: '3:00 PM',  booked: false },
  { label: '4:00 PM',  booked: true },
];

export default function AppointmentScreen() {
  const [apptType, setApptType] = useState('dropoff');
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [vehicle, setVehicle] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div>
      <div style={{ padding: '12px 20px' }}>
        <div style={{ fontSize: '11px', color: 'var(--mgc-tan-dark)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
          Appointment Type
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {APPT_TYPES.map(({ id, icon, name }) => (
            <div
              key={id}
              onClick={() => setApptType(id)}
              style={{
                background: apptType === id ? '#2a1810' : 'var(--mgc-black-card)',
                border: `1px solid ${apptType === id ? 'var(--mgc-coral)' : 'var(--mgc-black-border)'}`,
                borderRadius: '10px',
                padding: '14px 10px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: apptType === id ? 'var(--mgc-coral)' : '#555' }}>
                <Icon name={icon} size={20} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--mgc-white)', fontWeight: '500' }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle>Select a Date — April 2025</SectionTitle>
      <div style={{ display: 'flex', gap: '8px', padding: '4px 20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {DATES.map(({ dow, num, disabled }) => (
          <div
            key={num}
            onClick={() => !disabled && setSelectedDate(num)}
            style={{
              flexShrink: 0,
              width: '52px',
              background: selectedDate === num ? 'var(--mgc-coral)' : 'var(--mgc-black-card)',
              border: `1px solid ${selectedDate === num ? 'var(--mgc-coral)' : 'var(--mgc-black-border)'}`,
              borderRadius: '10px',
              padding: '10px 6px',
              textAlign: 'center',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.4 : 1,
            }}
          >
            <div style={{ fontSize: '10px', color: selectedDate === num ? 'rgba(255,255,255,0.7)' : '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{dow}</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--mgc-white)', marginTop: '2px' }}>{num}</div>
          </div>
        ))}
      </div>

      <SectionTitle>Available Times — Tuesday Apr 22</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '4px 20px' }}>
        {TIMES.map(({ label, booked }) => (
          <div
            key={label}
            onClick={() => !booked && setSelectedTime(label)}
            style={{
              background: selectedTime === label && !booked ? '#2a1810' : 'var(--mgc-black-card)',
              border: `1px solid ${selectedTime === label && !booked ? 'var(--mgc-coral)' : 'var(--mgc-black-border)'}`,
              borderRadius: '10px',
              padding: '12px',
              textAlign: 'center',
              cursor: booked ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              color: selectedTime === label && !booked ? 'var(--mgc-coral)' : booked ? '#444' : 'var(--mgc-white)',
              fontWeight: selectedTime === label && !booked ? '600' : '400',
              opacity: booked ? 0.35 : 1,
            }}
          >
            {booked ? `${label} ✗` : label}
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 20px' }}>
        <input
          placeholder="Vehicle (Year, Make, Model)"
          value={vehicle}
          onChange={e => setVehicle(e.target.value)}
          style={{
            width: '100%',
            background: 'var(--mgc-black-card)',
            border: '1px solid var(--mgc-black-border)',
            borderRadius: '10px',
            padding: '12px 14px',
            fontSize: '14px',
            color: 'var(--mgc-white)',
            fontFamily: 'var(--font-body)',
            marginBottom: '10px',
          }}
        />
        <textarea
          rows={2}
          placeholder="Notes for your visit..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
          style={{
            width: '100%',
            background: 'var(--mgc-black-card)',
            border: '1px solid var(--mgc-black-border)',
            borderRadius: '10px',
            padding: '12px 14px',
            fontSize: '14px',
            color: 'var(--mgc-white)',
            fontFamily: 'var(--font-body)',
            resize: 'none',
          }}
        />
        <CtaButton>Confirm Appointment</CtaButton>
      </div>
    </div>
  );
}
