// src/pages/TrackingPage.jsx
import { useState } from 'react';
import { useShipments } from '../context/ShipmentContext'; // Custom Hook ကို သုံးခြင်း

export default function TrackingPage() {
  const { shipments } = useShipments();
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = shipments.find((s) => s.id.toLowerCase() === searchId.trim().toLowerCase());
    setResult(found || 'NOT_FOUND');
  };

  return (
    <div>
      <h2>🔍 Track Package</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Enter Tracking ID (e.g. TRK-1001)" 
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {result === 'NOT_FOUND' && <p style={{ color: 'red' }}>❌ Package မတွေ့ရှိပါ။</p>}
        {result && result !== 'NOT_FOUND' && (
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>Tracking ID: {result.id}</h3>
            <p><strong>Recipient:</strong> {result.recipient}</p>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Current Location:</strong> {result.location}</p>
          </div>
        )}
      </div>
    </div>
  );
}