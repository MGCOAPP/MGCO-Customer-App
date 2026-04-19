import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import QuoteScreen from './screens/QuoteScreen';
import TrackScreen from './screens/TrackScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import FleetScreen from './screens/FleetScreen';
import CareScreen from './screens/CareScreen';
import AccountScreen from './screens/AccountScreen';

const SCREENS = {
  home: HomeScreen,
  gallery: GalleryScreen,
  quote: QuoteScreen,
  track: TrackScreen,
  appt: AppointmentScreen,
  fleet: FleetScreen,
  care: CareScreen,
  account: AccountScreen,
};

const SCREEN_TITLES = {
  home:    { title: 'Madison Graphics', sub: 'Company' },
  gallery: { title: 'Wrap Gallery',     sub: 'Browse Our Work' },
  quote:   { title: 'Get a Quote',      sub: 'Fast & Free Estimates' },
  track:   { title: 'Order Tracking',   sub: 'Live Status Updates' },
  appt:    { title: 'Schedule',         sub: 'Book Your Appointment' },
  fleet:   { title: 'My Fleet',         sub: 'Manage Your Vehicles' },
  care:    { title: 'Wrap Care',        sub: 'Protect Your Investment' },
  account: { title: 'My Account',       sub: 'Profile & Settings' },
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [notifCount] = useState(2);
  const isDesktop = useIsDesktop();

  const ActiveScreen = SCREENS[currentScreen] || HomeScreen;
  const screenInfo = SCREEN_TITLES[currentScreen] || SCREEN_TITLES.home;
  const isHome = currentScreen === 'home';

  if (isDesktop) {
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1100px',
        minHeight: '100dvh',
        margin: '0 auto',
        background: '#111',
        borderLeft: '1px solid #1a1a1a',
        borderRight: '1px solid #1a1a1a',
      }}>
        <Sidebar current={currentScreen} navigate={setCurrentScreen} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <TopBar
            title={screenInfo.title}
            sub={screenInfo.sub}
            isHome={isHome}
            notifCount={notifCount}
            onBack={() => setCurrentScreen('home')}
            isDesktop
          />
          <main style={{ flex: 1, overflowY: 'auto', background: '#111' }}>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <ActiveScreen navigate={setCurrentScreen} />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: '430px',
      minHeight: '100dvh',
      background: '#111',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TopBar
        title={screenInfo.title}
        sub={screenInfo.sub}
        isHome={isHome}
        notifCount={notifCount}
        onBack={() => setCurrentScreen('home')}
      />
      <main style={{ flex: 1, overflowY: 'auto', paddingBottom: '72px', background: '#111' }}>
        <ActiveScreen navigate={setCurrentScreen} />
      </main>
      <BottomNav current={currentScreen} navigate={setCurrentScreen} />
    </div>
  );
}
