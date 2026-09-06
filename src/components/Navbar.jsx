import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px 30px', background: '#0f172a', color: '#fff', alignItems: 'center' }}>
      <h2 style={{ margin: 0, marginRight: 'auto', color: '#38bdf8' }}>🚚 LogiTrack System</h2>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>
        Dashboard
      </NavLink>
      <NavLink to="/new-shipment" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>
        New Shipment
      </NavLink>
      <NavLink to="/track" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>
        Track Package
      </NavLink>
    </nav>
  );
}