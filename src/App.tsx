import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './commons/layouts/Layout';

import Home from './pages/Home/Home';
import CampDetails from './pages/CampDetail/CampDetails';
import CampApply from './pages/CampApply/CampApply';
import Community from './pages/Community/Community';

import NotFound from './commons/errors/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<CampDetails />} />
        <Route path="/apply" element={<CampApply />} />
        <Route path="/community" element={<Community />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
