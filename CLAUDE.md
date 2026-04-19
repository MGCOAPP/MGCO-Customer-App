# Madison Graphics Company — Customer App
## Claude Code Development Guide

---

## Project Overview

This is a React mobile web app for Madison Graphics Company (msngraphics.com), a vehicle wrap shop in Sun Prairie, WI. The app is designed for their customers — primarily business/fleet accounts — to quote, track, schedule, and manage vehicle wraps.

**Brand Colors:**
- Coral: `#D85A30` (primary CTA, accents)
- Tan: `#C8B89A` (secondary text, labels)
- Black: `#1a1a1a` / `#111` (backgrounds)
- White: `#F9F6F2` (text on dark)

**Fonts:** Bebas Neue (display/headings), Outfit (body)

---

## Getting Started

```bash
cd madison-graphics-app
npm install
npm start
```

App runs at http://localhost:3000

---

## File Structure

```
src/
  App.js                  # Main app, navigation state
  index.js                # Entry point
  index.css               # Global styles + CSS variables
  components/
    TopBar.js             # Header with logo and back button
    BottomNav.js          # 5-tab bottom navigation
    UI.js                 # Shared components (Card, Button, FormInput, etc.)
  screens/
    HomeScreen.js         # Dashboard with quick actions + order summary
    GalleryScreen.js      # Filterable wrap photo gallery
    QuoteScreen.js        # Quote request form with vehicle/photo upload
    TrackScreen.js        # Order status tracker with progress steps
    AppointmentScreen.js  # Date/time booking for drop-off, pick-up, consultation
    FleetScreen.js        # Multi-vehicle fleet management + brand asset storage
    CareScreen.js         # Post-install wrap care guide
    AccountScreen.js      # Profile, order history, payments, settings
```

---

## Features Built (All 10)

1. **Design Gallery** — Filterable by wrap type (Full, Partial, Fleet, Color Change, Decals)
2. **Quote Request Tool** — Vehicle selector, wrap type picker with pricing, photo upload, brand asset upload
3. **Order Tracker** — Progress bar + 5-step milestone tracker with status updates
4. **Appointment Scheduling** — Calendar date strip, time slot grid, appointment type selector
5. **Fleet Management Dashboard** — Per-vehicle status, refresh alerts, stats panel
6. **Brand Asset Storage** — File tags for stored logos/guides in Fleet screen
7. **Messaging / Chat** — (scaffold in AccountScreen → Contact Support — needs backend)
8. **Invoice & Payment** — (scaffold in AccountScreen → Invoices & Payments — needs backend)
9. **Wrap Care Guide** — Do/Don't cards for washing, sun, products, winter
10. **Referral & Loyalty** — (scaffold in AccountScreen → Referral Program — needs backend)

---

## Next Steps for Claude Code

### Priority 1 — Connect Real Data
- Replace mock data in each screen with API calls
- Set up a backend (Supabase recommended for fast setup)
- Suggested tables: `customers`, `orders`, `vehicles`, `appointments`, `gallery_items`

### Priority 2 — Add Real Photo Upload
```bash
# Install file handling
npm install react-dropzone
```
Update `QuoteScreen.js` upload zones to use `react-dropzone` with real file handling.

### Priority 3 — Push Notifications
```bash
npm install firebase
```
Set up Firebase Cloud Messaging for order status push notifications.

### Priority 4 — Authentication
```bash
npm install @supabase/supabase-js
```
Add login/signup flow. Recommended: phone number auth for customers.

### Priority 5 — Make it a PWA
The `public/index.html` already has mobile web app meta tags. Add:
- `public/manifest.json`
- Service worker for offline support
- App icon (use MGC logo)

### Priority 6 — Real Gallery
Replace emoji placeholders in `GalleryScreen.js` with real photos from Cloudinary or Supabase Storage.

---

## Key Design Decisions

- **Dark theme only** — matches MGC's brand aesthetic
- **Mobile-first, max-width 430px** — designed as a phone app
- **No routing library** — simple state-based navigation for easy Claude Code iteration
- **All CSS via inline styles + CSS variables** — no external CSS framework needed

---

## Business Info to Hardcode Until Backend is Ready

```js
const MGC = {
  name: 'Madison Graphics Company',
  address: '1320 N Bristol St, Sun Prairie, WI 53590',
  phone: '608-318-1711',
  email: 'info@msngraphics.com',
  website: 'https://msngraphics.com',
};
```

---

## Deployment (When Ready)

```bash
npm run build
# Deploy /build folder to:
# - Netlify (drag & drop)
# - Vercel (npx vercel)
# - Firebase Hosting
```
