// src/components/ShipmentCard.jsx
import React, { memo } from 'react';

function ShipmentCard({ shipment, onDelete }) {
  console.log(`Rendering Card: ${shipment.id}`); // Performance စမ်းသပ်ရန် Console Log

  return (
    <div style={{
      background: '#1e293b',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-[#334155]',
      alignItems: 'center'
    }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0', textAlign: 'left' }}>{shipment.id} - {shipment.recipient}</h4>
        <small style={{ color: '#94a3b8' }}>Status: {shipment.status} | Location: {shipment.location}</small>
      </div>

      <button 
        onClick={() => onDelete(shipment.id)}
        style={{
          background: '#ef4444',
          color: '#fff',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
}

// 💡 React.memo: shipment သို့မဟုတ် onDelete Props မပြောင်းလဲပါက ဒီ Card ကို Re-render မလုပ်ဘဲ Skip လုပ်ပေးမည်
export default memo(ShipmentCard);