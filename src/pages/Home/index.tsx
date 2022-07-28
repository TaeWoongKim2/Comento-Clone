import React from 'react';

import { ICommunityCard } from 'types/cards/CommunityCard';

import ComboBox from './components/ComboBox';
import PopularBootCamp from './components/PopularBootCamp';
import BargainSaleCamp from './components/BargainSaleCamp';
import MessageCard from './components/MessageCard';
import CommunityCards from './components/CommunityCards';

const communties: ICommunityCard[] = [
  {
    id: 1,
    category: '취업고민',
    title: '합격 메일 답장 어떻게 할까요?',
    question: '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
    answers: [
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '',
      },
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '',
      },
    ],
  },
  {
    id: 2,
    category: '취업고민',
    title: '합격 메일 답장 어떻게 할까요?',
    question: '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
    answers: [
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '안녕하세요. 먼저 면접까지...',
      },
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '안녕하세요. 먼저 면접까지...',
      },
    ],
  },
  {
    id: 3,
    category: '이직고민',
    title: '합격 메일 답장 어떻게 할까요?',
    question: '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
    answers: [
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '',
      },
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '',
      },
    ],
  },
  {
    id: 4,
    category: '취업고민',
    title: '합격 메일 답장 어떻게 할까요?',
    question: '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
    answers: [
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '안녕하세요. 먼저 면접까지...',
      },
      {
        nickname: '멘토1342',
        profile: 'public/images/mento_image',
        answer: '안녕하세요. 먼저 면접까지...',
      },
    ],
  },

];

function Home() {
  return (
    <>
      <ComboBox />

      <PopularBootCamp />

      <BargainSaleCamp />

      <MessageCard />

      <section>
        <h2>커뮤니티</h2>
        <CommunityCards
          communties={communties}
        />
      </section>
    </>
  );
}

export default Home;
