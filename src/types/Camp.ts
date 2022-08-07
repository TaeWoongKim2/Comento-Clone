/**
 * 강의 캠프 관련 타입 정의
 */
export type ICampType = 'popular' | 'sale';

export interface ICamp {
  id: number;
  name: string;
  type: ICampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface ICampDetail {
  id: number;
  tags: string[];
  name: string;
  desc: string;
  startDate: string;
  process: string;
  seat: string;
  reviewMaterial: string[];
  headerImaget: string;
  images: string[];
  reviews: {
    content: string;
    reviewer: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
