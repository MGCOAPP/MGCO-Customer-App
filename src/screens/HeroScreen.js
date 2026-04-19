import React, { useEffect, useState } from 'react';
import Icon from '../components/Icons';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

export default function HeroScreen({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  if (isDesktop) {
    return (
      <div style={{
        width: '100vw',
        minHeight: '100dvh',
        background: '#0f0f0f',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Background accents */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #D85A30 0%, transparent 40%)',
          opacity: 0.06, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '100%', height: '30%',
          background: 'linear-gradient(0deg, #000 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Left — branding + tagline */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 64px',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ ...fadeUp(0) }}>
            <div style={{
              fontSize: '11px', color: '#D85A30',
              letterSpacing: '5px', textTransform: 'uppercase',
              fontFamily: 'var(--font-body)', marginBottom: '20px',
            }}>
              Sun Prairie, WI
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px', color: '#555',
              letterSpacing: '6px', marginBottom: '32px',
            }}>
              MADISON GRAPHICS COMPANY
            </div>
          </div>

          <div style={{ ...fadeUp(0.15) }}>
            <div style={{ width: '56px', height: '4px', background: '#D85A30', marginBottom: '24px' }} />
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '96px', lineHeight: 0.88,
              color: '#F9F6F2', letterSpacing: '2px',
            }}>
              LARGER<br />
              THAN<br />
              <span style={{ color: '#D85A30' }}>LIFE.</span>
            </div>
          </div>

          <div style={{ ...fadeUp(0.3), marginTop: '36px' }}>
            <div style={{
              fontSize: '16px', color: '#C8B89A',
              lineHeight: 1.6, maxWidth: '380px',
              fontFamily: 'var(--font-body)',
            }}>
              Vehicle wraps, fleet graphics, and bold brand statements — built to turn heads on every road.
            </div>
          </div>
        </div>

        {/* Right — CTA panel */}
        <div style={{
          width: '420px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 56px',
          borderLeft: '1px solid #222',
          background: 'linear-gradient(160deg, #161616 0%, #0f0f0f 100%)',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ ...fadeUp(0.2) }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px', color: '#F9F6F2',
              letterSpacing: '2px', marginBottom: '8px',
            }}>
              CUSTOMER PORTAL
            </div>
            <div style={{
              fontSize: '13px', color: '#666',
              fontFamily: 'var(--font-body)', marginBottom: '40px',
            }}>
              Track orders, manage your fleet, and request quotes — all in one place.
            </div>

            <button
              onClick={onEnter}
              style={{
                width: '100%',
                padding: '20px',
                background: '#D85A30',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                letterSpacing: '3px',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              VIEW MY ACCOUNT
            </button>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '10px', marginTop: '8px',
            }}>
              {[
                { label: 'Track Order', icon: 'track' },
                { label: 'Get a Quote', icon: 'quote' },
                { label: 'Schedule',    icon: 'schedule' },
                { label: 'My Fleet',    icon: 'fleet' },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={onEnter}
                  style={{
                    padding: '14px 10px',
                    background: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: '4px',
                    color: '#C8B89A',
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Icon name={icon} size={18} color="#C8B89A" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            ...fadeUp(0.35),
            marginTop: '40px',
            paddingTop: '28px',
            borderTop: '1px solid #222',
            fontSize: '12px',
            color: '#444',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.8,
          }}>
            608-318-1711<br />
            1320 N Bristol St, Sun Prairie, WI<br />
            msngraphics.com
          </div>
        </div>
      </div>
    );
  }

  // Mobile layout
  return (
    <div style={{
      width: '100%',
      minHeight: '100dvh',
      background: '#0f0f0f',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '60%', height: '100%',
        background: 'linear-gradient(160deg, #D85A30 0%, transparent 55%)',
        opacity: 0.08, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '100%', height: '40%',
        background: 'linear-gradient(0deg, #000 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top — wordmark */}
      <div style={{ padding: '48px 28px 0', ...fadeUp(0) }}>
        <div style={{
          fontSize: '11px', color: '#D85A30',
          letterSpacing: '4px', textTransform: 'uppercase',
          fontFamily: 'var(--font-body)', marginBottom: '8px',
        }}>
          Sun Prairie, WI
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '42px', color: '#F9F6F2',
          lineHeight: 0.95, letterSpacing: '2px',
        }}>
          MADISON<br />
          <span style={{ color: '#D85A30' }}>GRAPHICS</span><br />
          COMPANY
        </div>
      </div>

      {/* Center — tagline */}
      <div style={{ padding: '0 28px', ...fadeUp(0.2) }}>
        <div style={{ width: '40px', height: '3px', background: '#D85A30', marginBottom: '18px' }} />
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '64px', lineHeight: 0.9,
          color: '#F9F6F2', letterSpacing: '1px',
        }}>
          LARGER<br />THAN<br />
          <span style={{ color: '#D85A30' }}>LIFE.</span>
        </div>
        <div style={{
          fontSize: '14px', color: '#C8B89A',
          marginTop: '16px', lineHeight: 1.5,
          maxWidth: '260px', fontFamily: 'var(--font-body)',
        }}>
          Vehicle wraps, fleet graphics, and bold brand statements — built to turn heads.
        </div>
      </div>

      {/* Bottom — CTA */}
      <div style={{ padding: '0 28px 52px', ...fadeUp(0.4) }}>
        <button
          onClick={onEnter}
          style={{
            width: '100%', padding: '18px',
            background: '#D85A30', color: '#fff',
            border: 'none', borderRadius: '4px',
            fontFamily: 'var(--font-display)',
            fontSize: '22px', letterSpacing: '3px',
            cursor: 'pointer',
          }}
        >
          VIEW MY ACCOUNT
        </button>
        <div style={{
          textAlign: 'center', marginTop: '14px',
          fontSize: '12px', color: '#555',
          fontFamily: 'var(--font-body)',
        }}>
          608-318-1711 · msngraphics.com
        </div>
      </div>
    </div>
  );
}
