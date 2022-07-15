import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';

function CommonLayout() {
  return (
    <div>
      <header>
        Common Header
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

export default CommonLayout;
