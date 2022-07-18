export interface IMento {
  nickname: string;
  profile: string;
}

export interface IMentoAnswer extends IMento {
  answer: string;
}

export interface ICommunityCard {
  category: '취업고민' | '이직고민';
  title: string;
  description: string;
  answers: IMentoAnswer[];
}
