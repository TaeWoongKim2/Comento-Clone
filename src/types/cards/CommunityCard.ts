export interface IMento {
  nickname: string;
  profile: string;
}

export interface IMentoAnswer extends IMento {
  answer: string;
}

export interface ICommunityCard {
  id: Number;
  category: '취업고민' | '이직고민';
  title: string;
  question: string;
  answers: IMentoAnswer[];
}
