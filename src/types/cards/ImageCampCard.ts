export interface CampCard {
  category: 'IT' | '디자인' | '기획';
  major: '백엔드' | 'SQL' | '프론트';
  image: string;
  title: string;
  startDate: string;
}

export interface PopularCampCard extends CampCard {
  status: '모집전' | '모집중' | '모집완료';
}
