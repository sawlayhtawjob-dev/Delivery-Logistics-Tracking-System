import React, { useState } from 'react';

export default function TrackingPage({ shipments }) {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    const result = shipments.find(s => s.trackingId.toLowerCase() === searchId.trim().toLowerCase());
    setSearchResult(result || null);
    setHasSearched(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#38bdf8', marginBottom: '20px' }}>🔍 Tracking Package Status</h2>

      {/* 🔍 Search Input Form */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
        <input
          type="text"
          placeholder="Tracking ID ရိုက်ထည့်ပါ (ဥပမာ - TRK-1001)..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #334155', background: '#1e293b', color: '#fff' }}
        />
        <button
          type="submit"
          style={{ padding: '12px 20px', background: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          ရှာမည်
        </button>
      </form>

      {/* 📌 Result Display Section */}
      {hasSearched && (
        searchResult ? (
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #38bdf8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', pb: '10px', marginBottom: '15px' }}>
              <h3 style={{ margin: 0, color: '#38bdf8' }}>{searchResult.trackingId}</h3>
              <span style={{
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                background: searchResult.status === 'Delivered' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                color: searchResult.status === 'Delivered' ? '#10b981' : '#f59e0b',
                fontWeight: 'bold'
              }}>
                {searchResult.status}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', color: '#cbd5e1' }}>
              <div><strong>Sender:</strong> {searchResult.sender}</div>
              <div><strong>Receiver:</strong> {searchResult.receiver}</div>
              <div><strong>Destination:</strong> {searchResult.destination}</div>
              <div><strong>Date:</strong> {searchResult.date}</div>
            </div>
          </div>
        ) : (
          <div style={{ padding: '20px', background: '#1e293b', borderRadius: '8px', textAlign: 'center', color: '#ef4444', border: '1px solid #ef4444' }}>
            ❌ သက်ဆိုင်ရာ Tracking ID ဖြင့် ပါဆယ် ရှာမတွေ့ပါ။
          </div>
        )
      )}
    </div>
  );
}