// src/pages/DashboardPage.jsx
import { useContext } from 'react';
import { ShipmentContext } from '../context/ShipmentContext';

export default function DashboardPage() {
  const { shipments } = useContext(ShipmentContext);

  return (
    <div>
      <h2>📊 Dashboard Overview</h2>
      <p>Total Shipments: {shipments.length}</p>
      <ul>
        {shipments.map((item) => (
          <li key={item.id}>{item.id} - {item.recipient} ({item.status})</li>
        ))}
      </ul>
    </div>
  );
}