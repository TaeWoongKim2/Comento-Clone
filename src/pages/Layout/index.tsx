import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

function MainLayout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
