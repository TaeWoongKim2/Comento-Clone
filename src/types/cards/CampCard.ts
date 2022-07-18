export interface ICampCard {
  id: Number;
  category: 'IT' | '디자인' | '기획';
  skill: '백엔드' | 'SQL' | '프론트' | '인공지능';
  image: string;
  title: string;
  startDate: string;
  status: '모집전' | '모집중' | '모집완료';
}
