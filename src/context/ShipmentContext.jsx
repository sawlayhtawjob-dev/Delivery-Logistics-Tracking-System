// src/context/ShipmentContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';

export const ShipmentContext = createContext();

export function ShipmentProvider({ children }) {
  const [shipments, setShipments] = useState(() => {
    const saved = localStorage.getItem('shipments_data');
    return saved ? JSON.parse(saved) : [
      { id: 'TRK-1001', recipient: 'Aung Aung', status: 'In Transit', location: 'Yangon Hub' },
      { id: 'TRK-1002', recipient: 'Su Su', status: 'Delivered', location: 'Mandalay Branch' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('shipments_data', JSON.stringify(shipments));
  }, [shipments]);

  const addShipment = (newShipment) => {
    setShipments((prev) => [newShipment, ...prev]);
  };

  const deleteShipment = (id) => {
    setShipments((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    // 💡 ဒီနေရာမှာ deleteShipment ကို value ထဲ ပေါင်းထည့်ပေးလိုက်ပါ
    <ShipmentContext.Provider value={{ shipments, addShipment, deleteShipment }}>
      {children}
    </ShipmentContext.Provider>
  );
}

// 💡 Custom Hook
export function useShipments() {
  const context = useContext(ShipmentContext);
  if (!context) {
    throw new Error('useShipments must be used within a ShipmentProvider');
  }
  return context;
}