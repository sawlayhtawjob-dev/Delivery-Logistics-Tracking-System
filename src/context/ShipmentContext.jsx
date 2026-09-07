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

  return (
    <ShipmentContext.Provider value={{ shipments, addShipment }}>
      {children}
    </ShipmentContext.Provider>
  );
}

// 💡 Custom Hook ဖန်တီးခြင်း
export function useShipments() {
  const context = useContext(ShipmentContext);
  if (!context) {
    throw new Error('useShipments must be used within a ShipmentProvider');
  }
  return context;
}