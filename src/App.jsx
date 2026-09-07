// src/App.jsx
import { Routes, Route, NavLink } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import NewShipmentPage from './pages/NewShipmentPage';
import TrackingPage from './pages/TrackingPage';

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#333', color: '#fff' }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>Dashboard</NavLink>
        <NavLink to="/new" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>New Shipment</NavLink>
        <NavLink to="/track" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>Track</NavLink>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/new" element={<NewShipmentPage />} />
          <Route path="/track" element={<TrackingPage />} />
        </Routes>
      </div>
    </div>
  );
}