import { ICampCard } from 'types/cards/CampCard';

import CampImage1 from 'assets/images/CampImages/camp-image1.png';
import CampImage2 from 'assets/images/CampImages/camp-image2.png';
import CampImage3 from 'assets/images/CampImages/camp-image3.png';
import CampImage4 from 'assets/images/CampImages/camp-image4.png';

const CampsFixture: ICampCard[] = [
  {
    id: 1,
    category: 'IT',
    skill: '백엔드',
    image: `${CampImage1}`,
    title: 'IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무',
    startDate: '1월 28일부터',
    status: '모집완료',
  },
  {
    id: 2,
    category: 'IT',
    skill: 'SQL',
    image: `${CampImage2}`,
    title: 'SQL 입문부터 활용까지 - 데이터 분석 보고서 작성',
    startDate: '2월 3일부터',
    status: '모집완료',
  },
  {
    id: 3,
    category: 'IT',
    skill: '인공지능',
    image: `${CampImage3}`,
    title: '인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z',
    startDate: '2월 8일부터',
    status: '모집완료',
  },
  {
    id: 4,
    category: 'IT',
    skill: '백엔드',
    image: `${CampImage4}`,
    title: ' 클라우드 AWS 구축부터 운영까지 실무 AtoZ',
    startDate: '2월 18일부터',
    status: '모집완료',
  },
];

export default CampsFixture;
