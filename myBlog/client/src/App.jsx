import React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="text-gray-600 text-md">
      <Header />
      <Outlet />
      
    </div>
  )
}

export default App
