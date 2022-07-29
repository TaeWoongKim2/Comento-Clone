import React from 'react';

import ComboBox from './components/ComboBox';
import PopularBootCamp from './components/PopularBootCamp';
import BargainSaleCamp from './components/BargainSaleCamp';
import MessageCard from './components/MessageCard';
import CommunitySection from './components/CommunitySection';

function Home() {
  return (
    <>
      <ComboBox />

      <PopularBootCamp />

      <BargainSaleCamp />

      <MessageCard />

      <CommunitySection />
    </>
  );
}

export default Home;
