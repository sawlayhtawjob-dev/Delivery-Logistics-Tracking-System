import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import NewShipmentPage from './pages/NewShipmentPage';
import TrackingPage from './pages/TrackingPage';

export default function App() {
  // 1. Centralized State: Delivery/Shipment စာရင်းများ
  const [shipments, setShipments] = useState([
    {
      trackingId: 'TRK-1001',
      sender: 'U Ba',
      receiver: 'Daw Mya',
      destination: 'Mandalay',
      status: 'In Transit', // In Transit, Delivered, Pending
      date: '2026-09-06'
    },
    {
      trackingId: 'TRK-1002',
      sender: 'Ko Kyaw',
      receiver: 'Ma Su',
      destination: 'Yangon',
      status: 'Delivered',
      date: '2026-09-05'
    }
  ]);

  // 2. Shipment အသစ်ထည့်သွင်းပေးမည့် Function
  const handleAddShipment = (newShipment) => {
    setShipments([newShipment, ...shipments]);
  };

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      
      <main style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        <Routes>
          {/* Dashboard တွင် Shipments စာရင်း ပြသရန် Data ပါးပေးမည် */}
          <Route 
            path="/" 
            element={<DashboardPage shipments={shipments} />} 
          />

          {/* New Shipment Page သို့ Shipment ထည့်သည့် Function ပါးပေးမည် */}
          <Route 
            path="/new-shipment" 
            element={<NewShipmentPage onAddShipment={handleAddShipment} />} 
          />

          {/* Track Page သို့ ရှာဖွေနိုင်ရန် Shipments Data ပါးပေးမည် */}
          <Route 
            path="/track" 
            element={<TrackingPage shipments={shipments} />} 
          />
        </Routes>
      </main>
    </div>
  );
}