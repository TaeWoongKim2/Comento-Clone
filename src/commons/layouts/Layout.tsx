import React from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Footer from './components/Footer';

function MainLayout() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
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
