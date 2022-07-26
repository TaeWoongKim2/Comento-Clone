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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
