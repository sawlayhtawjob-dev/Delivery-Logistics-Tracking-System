import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewShipmentPage({ onAddShipment }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sender: '',
    receiver: '',
    destination: '',
    status: 'In Transit'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sender || !formData.receiver || !formData.destination) {
      alert('ကျေးဇူးပြု၍ အချက်အလက်များ အားလုံး ဖြည့်စွက်ပါ');
      return;
    }

    const newShipment = {
      trackingId: `TRK-${Math.floor(1000 + Math.random() * 9000)}`, // Unique ID Auto generate လုပ်ခြင်း
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    onAddShipment(newShipment);
    alert(`ပါဆယ် တင်သွင်းမှု အောင်မြင်ပါသည်။ Tracking ID: ${newShipment.trackingId}`);
    
    // DashboardPage ဆီ ပြန်လည် ညွှန်းပို့ခြင်း
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', background: '#1e293b', padding: '25px', borderRadius: '8px', border: '1px solid #334155' }}>
      <h2 style={{ marginTop: 0, color: '#38bdf8', marginBottom: '20px' }}>📦 New Shipment တင်သွင်းရန်</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8' }}>ပေးပို့သူ အမည် (Sender):</label>
          <input
            type="text"
            value={formData.sender}
            onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
            placeholder="ဥပမာ - ဦးဘ"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8' }}>လက်ခံသူ အမည် (Receiver):</label>
          <input
            type="text"
            value={formData.receiver}
            onChange={(e) => setFormData({ ...formData, receiver: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
            placeholder="ဥပမာ - ဒေါ်မြ"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8' }}>ရောက်ရှိမည့် မြို့/နေရာ (Destination):</label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
            placeholder="ဥပမာ - မန္တလေး"
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px',
            background: '#38bdf8',
            color: '#0f172a',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          ➕ Shipment တင်မည်
        </button>
      </form>
    </div>
  );
}