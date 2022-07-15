import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './commons/layouts/MainLayout';
import CommonLayout from './commons/layouts/CommonLayout';

import Home from './pages/Home/Home';
import CampDetails from './pages/CampDetail/CampDetails';
import CampApply from './pages/CampApply/CampApply';

import NotFound from './commons/errors/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<CommonLayout />}>
        <Route path="/detail" element={<CampDetails />} />
        <Route path="/apply" element={<CampApply />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
