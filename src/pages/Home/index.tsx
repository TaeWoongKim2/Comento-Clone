import React, { useState, useEffect } from 'react';

import { fetchCampsByType, fetchCommunites } from 'apis/api';
import { ICamp, ICampType } from 'types/Camp';
import { ICommunity } from 'types/Community';

import CardsSkeleton from 'components/Skeleton/CardsSkeleton';

import ComboBox from './components/ComboBox';
import PopularBootCamp from './components/PopularBootCamp';
import BargainSaleCamp from './components/BargainSaleCamp';
import MessageCard from './components/MessageCard';
import CommunitySection from './components/CommunitySection';

function Home() {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  const [hotCommunities, setHotCommunities] = useState<ICommunity[]>();

  useEffect(() => {
    loadSaleCamps('popular');
    setTimeout(() => {
      loadSaleCamps('sale');
    }, 500);
    setTimeout(() => {
      loadCommunities();
    }, 500);
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

  const loadCommunities = async () => {
    const response = await fetchCommunites();
    const { data: communities } = response;
    setHotCommunities(communities);
  };

  return (
    <>
      <ComboBox />

      {popularCamps ? (
        <PopularBootCamp camps={popularCamps} />
      ) : (
        <CardsSkeleton />
      )}

      {saleCamps ? (
        <BargainSaleCamp camps={saleCamps} />
      ) : (
        <CardsSkeleton />
      )}

      <MessageCard />

      <CommunitySection communities={hotCommunities || []} />
    </>
  );
}

export default Home;
