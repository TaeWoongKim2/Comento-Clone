export interface MentoAnswer {
  profileImage: string;
  id: string;
  answer: string;
}

export interface CommunityCard {
  category: '취업고민';
  title: string;
  description: string;
  answers: MentoAnswer[];
}
