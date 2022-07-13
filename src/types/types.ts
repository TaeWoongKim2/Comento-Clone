// enum Class {
//   IT = 'IT',
//   Design = '디자인',
//   Business = '기획',
// }

// enum Field {
//   Backend = '백엔드',
//   Sql = 'SQL',
//   Frontend = '프론트',
// }

export interface Camp {
  class: 'IT' | '디자인' | '기획';
  field: '벡엔드' | 'SQL' | '프론트';
  state: '모집전' | '모집전' | '모집완료' | string;
  description: string;
  openDate: string;
}
