// src/pages/NewShipmentPage.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShipmentContext } from '../context/ShipmentContext';

export default function NewShipmentPage() {
  const { addShipment } = useContext(ShipmentContext);
  const navigate = useNavigate();

  const [recipient, setRecipient] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient || !location) return;

    const newShipment = {
      id: `TRK-${Math.floor(1000 + Math.random() * 9000)}`,
      recipient,
      status: 'In Transit',
      location
    };

    addShipment(newShipment);
    navigate('/'); // Dashboard သို့ Auto-redirect ပေးခြင်း
  };

  return (
    <div>
      <h2>📦 Add New Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient Name: </label>
          <input 
            type="text" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            required 
          />
        </div>
        <br />
        <div>
          <label>Current Location: </label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
        </div>
        <br />
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}