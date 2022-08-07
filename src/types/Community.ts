export interface IMentoComent {
  profile: string;
  nickname: string;
  content: string;
}

export interface ICommunity {
  id: Number;
  tags: string[];
  title: string;
  content: string;
  comments: IMentoComent[];
}
