import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import NewShipmentPage from './pages/NewShipmentPage';
import TrackingPage from './pages/TrackingPage';

export default function App() {
  // 1. Initial State: LocalStorage တွင် Data ရှိပါက ယူမည်၊ မရှိပါက Initial Sample Data သုံးမည်
  const [shipments, setShipments] = useState(() => {
    try {
      const savedData = localStorage.getItem("logitrack_shipments");
      return savedData ? JSON.parse(savedData) : [
        {
          trackingId: 'TRK-1001',
          sender: 'U Ba',
          receiver: 'Daw Mya',
          destination: 'Mandalay',
          status: 'In Transit',
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
      ];
    } catch (e) {
      return [];
    }
  });

  // 2. useEffect: shipments State ပြောင်းလဲတိုင်း LocalStorage သို့ Auto-Save ပြုလုပ်ခြင်း
  useEffect(() => {
    localStorage.setItem("logitrack_shipments", JSON.stringify(shipments));
  }, [shipments]);

  // 3. Shipment အသစ်ထည့်သွင်းပေးမည့် Function
  const handleAddShipment = (newShipment) => {
    setShipments([newShipment, ...shipments]);
  };

  // 4. Status ပြောင်းလဲပေးမည့် Handler Function (Feature သစ်)
  const handleStatusChange = (trackingId, newStatus) => {
    const updatedShipments = shipments.map(item => {
      if (item.trackingId === trackingId) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setShipments(updatedShipments);
  };

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      
      <main style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
        <Routes>
          {/* Dashboard တွင် Shipments စာရင်းနှင့် Status Change Function ပါးပေးမည် */}
          <Route 
            path="/" 
            element={
              <DashboardPage 
                shipments={shipments} 
                onStatusChange={handleStatusChange} 
              />
            } 
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