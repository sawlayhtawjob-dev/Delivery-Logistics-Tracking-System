// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page များကို Lazy Load ပြုလုပ်ခြင်း (လိုအပ်မှသာ Network တွင် ခေါ်ယူမည်)
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const NewShipmentPage = lazy(() => import('./pages/NewShipmentPage'));
const TrackingPage = lazy(() => import('./pages/TrackingPage'));

export default function App() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      
      <main style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Lazy Loaded Components များ ယူနေစဉ် Loading UI ပြသရန် Suspense ကို သုံးသည် */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/new-shipment" element={<NewShipmentPage />} />
            <Route path="/track" element={<TrackingPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}