import { ICamp } from 'types/Camp';

import CampImage5 from 'assets/images/CampImages/camp-image5.png';
import CampImage6 from 'assets/images/CampImages/camp-image6.png';
import CampImage7 from 'assets/images/CampImages/camp-image7.png';
import CampImage8 from 'assets/images/CampImages/camp-image8.png';

const SaleCampsFixture: ICamp[] = [
  {
    id: 1,
    name: 'IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무',
    type: 'sale',
    status: '모집완료',
    field: 'IT',
    skill: '백엔드',
    startDate: '1월 28일부터',
    thumbnail: `${CampImage5}`,
  },
  {
    id: 2,
    name: 'SQL 입문부터 활용까지 - 데이터 분석 보고서 작성',
    type: 'sale',
    status: '모집완료',
    field: 'IT',
    skill: 'SQL',
    startDate: '2월 3일부터',
    thumbnail: `${CampImage6}`,
  },
  {
    id: 3,
    name: '인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z',
    type: 'sale',
    status: '모집완료',
    field: 'IT',
    skill: '인공지능',
    startDate: '2월 8일부터',
    thumbnail: `${CampImage7}`,
  },
  {
    id: 4,
    name: ' 클라우드 AWS 구축부터 운영까지 실무 AtoZ',
    type: 'sale',
    status: '모집완료',
    field: 'IT',
    skill: '백엔드',
    startDate: '2월 18일부터',
    thumbnail: `${CampImage8}`,
  },
];

export default SaleCampsFixture;
