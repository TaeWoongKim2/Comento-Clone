import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CampDetails from './pages/CampDetail/CampDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<CampDetails />} />
    </Routes>
  );
}

export default App;
