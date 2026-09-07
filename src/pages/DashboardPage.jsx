// src/pages/DashboardPage.jsx
import React, { useState, useMemo, useCallback } from 'react';
import { useShipments } from '../context/ShipmentContext';
import ShipmentCard from '../components/ShipmentCard';

export default function DashboardPage() {
  const { shipments, deleteShipment } = useShipments(); // Context မှ deleteShipment ကို ယူသုံးမည်
  const [searchTerm, setSearchTerm] = useState('');

  // 1. useMemo ဖြင့် Search Logic ကို Cache ပြုလုပ်ခြင်း
  const filteredShipments = useMemo(() => {
    return shipments.filter(item => 
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.recipient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [shipments, searchTerm]);

  // 2. 💡 useCallback: Parent Render ဖြစ်တိုင်း Function Memory Reference အသစ်မဖြစ်အောင် ထိန်းချုပ်ပေးမည်
  // ဤသို့ပြုလုပ်ခြင်းဖြင့် React.memo သုံးထားသော ShipmentCard များ မလိုအပ်ဘဲ Re-render ဖြစ်ခြင်းမှ တားဆီးပေးသည်
  const handleDelete = useCallback((id) => {
    deleteShipment(id);
  }, [deleteShipment]);

  return (
    <div>
      <h2>Shipment Dashboard</h2>
      
      <input
        type="text"
        placeholder="Search by ID or Recipient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #334155',
          background: '#1e293b',
          color: '#fff'
        }}
      />

      <div>
        {filteredShipments.map((shipment) => (
          /* React.memo ပါသော Child Component သို့ useCallback ဖြင့် Cache လုပ်ထားသော Function ပါးပေးခြင်း */
          <ShipmentCard 
            key={shipment.id} 
            shipment={shipment} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}