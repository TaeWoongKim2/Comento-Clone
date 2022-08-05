import React, { useState, useEffect } from 'react';

import { fetchCampsByType } from 'apis/api';
import { ICamp, ICampType } from 'types/Camp';

import ComboBox from './components/ComboBox';
import PopularBootCamp from './components/PopularBootCamp';
import BargainSaleCamp from './components/BargainSaleCamp';
import MessageCard from './components/MessageCard';
import CommunitySection from './components/CommunitySection';

function Home() {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);

  useEffect(() => {
    loadSaleCamps('popular');
    loadSaleCamps('sale');
  }, []);

  const loadSaleCamps = async (type: ICampType) => {
    const response = await fetchCampsByType(type);
    const { data: camps } = response;

    if (type === 'popular') {
      setPopularCamps(camps);
      return;
    }
    setSaleCamps(camps);
  };

  return (
    <>
      <ComboBox />

      <PopularBootCamp camps={popularCamps} />

      <BargainSaleCamp camps={saleCamps} />

      <MessageCard />

      <CommunitySection />
    </>
  );
}

export default Home;
