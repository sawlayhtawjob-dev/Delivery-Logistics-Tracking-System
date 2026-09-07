// src/pages/NewShipmentPage.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShipmentContext } from '../context/ShipmentContext';
import { useFormInput } from '../hooks/useFormInput'; // 👈 Custom Hook ကို Import လုပ်ပါ

export default function NewShipmentPage() {
  const { addShipment } = useContext(ShipmentContext);
  const navigate = useNavigate();

  // 💡 1. useState အဟောင်းများအစား useFormInput ကို အသုံးပြုပါ
  const { values, handleChange, resetForm } = useFormInput({
    recipient: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.recipient || !values.location) return;

    const newShipment = {
      id: `TRK-${Math.floor(1000 + Math.random() * 9000)}`,
      recipient: values.recipient,
      status: 'In Transit',
      location: values.location
    };

    addShipment(newShipment);
    resetForm(); // Form Reset ပြုလုပ်ခြင်း
    navigate('/'); // Dashboard သို့ Auto-redirect ပေးခြင်း
  };

  return (
    <div>
      <h2>📦 Add New Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient Name: </label>
          {/* 💡 2. name="recipient" ထည့်ပေးပြီး value နှင့် onChange ကို handleChange ထဲ ချိတ်ပါ */}
          <input 
            type="text" 
            name="recipient" 
            value={values.recipient} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br />
        <div>
          <label>Current Location: </label>
          {/* 💡 3. name="location" ထည့်ပေးပါ */}
          <input 
            type="text" 
            name="location" 
            value={values.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br />
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}