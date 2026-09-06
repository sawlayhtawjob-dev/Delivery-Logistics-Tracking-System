import React from 'react';

export default function DashboardPage({ shipments, onStatusChange }) {
  // Statistics များ တွက်ချက်ခြင်း
  const totalShipments = shipments.length;
  const inTransitCount = shipments.filter(s => s.status === 'In Transit').length;
  const deliveredCount = shipments.filter(s => s.status === 'Delivered').length;
  const pendingCount = shipments.filter(s => s.status === 'Pending').length;

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#38bdf8' }}>📊 Logistics Dashboard</h2>

      {/* 📈 Stats Cards Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginBottom: '25px' }}>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Total Shipments</span>
          <h3 style={{ fontSize: '24px', margin: '5px 0 0 0', color: '#fff' }}>{totalShipments}</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Pending (စောင့်ဆိုင်းဆဲ)</span>
          <h3 style={{ fontSize: '24px', margin: '5px 0 0 0', color: '#ef4444' }}>{pendingCount}</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>In Transit (လမ်းကြောင်းပေါ်)</span>
          <h3 style={{ fontSize: '24px', margin: '5px 0 0 0', color: '#f59e0b' }}>{inTransitCount}</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Delivered (ရောက်ရှိပြီး)</span>
          <h3 style={{ fontSize: '24px', margin: '5px 0 0 0', color: '#10b981' }}>{deliveredCount}</h3>
        </div>
      </div>

      {/* 📜 Shipments Table */}
      <div style={{ background: '#1e293b', borderRadius: '8px', padding: '15px', border: '1px solid #334155' }}>
        <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '18px' }}>📦 ပါဆယ် ပို့ဆောင်မှု မှတ်တမ်းများ</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', fontSize: '14px' }}>
              <th style={{ padding: '10px' }}>Tracking ID</th>
              <th style={{ padding: '10px' }}>Sender</th>
              <th style={{ padding: '10px' }}>Receiver</th>
              <th style={{ padding: '10px' }}>Destination</th>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Status အခြေအနေ ပြောင်းရန်</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s) => (
              <tr key={s.trackingId} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px', color: '#38bdf8', fontWeight: 'bold' }}>{s.trackingId}</td>
                <td style={{ padding: '10px' }}>{s.sender}</td>
                <td style={{ padding: '10px' }}>{s.receiver}</td>
                <td style={{ padding: '10px' }}>{s.destination}</td>
                <td style={{ padding: '10px', color: '#94a3b8' }}>{s.date}</td>
                <td style={{ padding: '10px' }}>
                  {/* Status အခြေအနေ ပြောင်းလဲမည့် Select Dropdown */}
                  <select
                    value={s.status}
                    onChange={(e) => onStatusChange(s.trackingId, e.target.value)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      border: '1px solid #334155',
                      background: '#0f172a',
                      color: s.status === 'Delivered' ? '#10b981' : s.status === 'In Transit' ? '#f59e0b' : '#ef4444',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Pending" style={{ color: '#ef4444' }}>Pending</option>
                    <option value="In Transit" style={{ color: '#f59e0b' }}>In Transit</option>
                    <option value="Delivered" style={{ color: '#10b981' }}>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}