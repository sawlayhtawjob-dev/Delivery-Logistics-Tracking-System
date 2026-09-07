// src/context/ShipmentContext.jsx
import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; // Custom Hook ကို Import လုပ်ပါ

export const ShipmentContext = createContext();

const DEFAULT_SHIPMENTS = [
  { id: 'TRK-1001', recipient: 'Aung Aung', status: 'In Transit', location: 'Yangon Hub' },
  { id: 'TRK-1002', recipient: 'Su Su', status: 'Delivered', location: 'Mandalay Branch' }
];

export function ShipmentProvider({ children }) {
  // 💡 LocalStorage Logic နဲ့ useEffect နေရာမှာ မိမိတို့ ရေးထားတဲ့ useLocalStorage Custom Hook ကို အစားထိုးလိုက်သည်
  const [shipments, setShipments] = useLocalStorage('shipments_data', DEFAULT_SHIPMENTS);

  const addShipment = (newShipment) => {
    setShipments((prev) => [newShipment, ...prev]);
  };

  const deleteShipment = (id) => {
    setShipments((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <ShipmentContext.Provider value={{ shipments, addShipment, deleteShipment }}>
      {children}
    </ShipmentContext.Provider>
  );
}

// 💡 Custom Hook for using Shipment Context
export function useShipments() {
  const context = useContext(ShipmentContext);
  if (!context) {
    throw new Error('useShipments must be used within a ShipmentProvider');
  }
  return context;
}