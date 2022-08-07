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

// TODO
// {"data":
//   [{"id":21,
//   "tags":["조회수 TOP","취업 고민"],
//   "title":"합격 메일 답장 어떻게 할까요?",
//   "content":"고칠 부분이 있는지 봐주시면 감사하겠습니다!",
//   "comments":[
//     {
//       "profile":"https://cdn.pixabay.com/photo/2022/01/19/19/41/san-francisco-6950837_960_720.jpg",
//       "content":"안녕하세요. 먼저 합격 축하드립니다.",
//       "nickname":"Jacob"
//     },{"profile":"https://cdn.pixabay.com/photo/2021/07/25/12/22/tourist-attraction-6491734__340.jpg","content":"메일의 서문을 시작할 때는 이렇게 해주세요.","nickname":"KMJ"}]},{"id":18,"tags":["조회수 TOP","취업 고민"],"title":"OO 마트 신입 초봉","content":"안녕하세요! OO 마트 대졸 신입공채 초봉 문의드립니다!! 3000만원으로 알고 있는데 맞나요?? 아니면 조금 올랐는지요!","comments":[{"profile":"https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg","content":"조금 오른 것으로 알고 있습니다. 작년 대비 500정도","nickname":"김민수"},{"profile":"https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510__340.jpg","content":"안녕하세요. AA 마트 현직자입니다. 친구가 몇몇 있어 답변 드립니다.","nickname":"김민수"}]},{"id":15,"tags":["조회수 TOP","취업 고민"],"title":"C회사 분위기가 궁금합니다!~","content":"안녕하십니까 선배님 C회사 HA사업본부 안에 총 3가지 부서가 있는것으로 알고있습니다. 기구계발직무 분위기가 궁금합니다. ","comments":[{"profile":"https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245__340.png","nickname":"꼬깔콘","content":"본부 안에 제품별로 부서가 나뉩니다."},{"profile":"https://cdn.pixabay.com/photo/2022/01/06/00/49/coffee-6918354__340.png","content":"HA사업본부는 작년부터 부서가 다르게 나뉘었습니다.","nickname":"파란다리10"}]},{"id":6,"tags":["조회수 TOP","취업 고민"],"title":"채용 검진 결과 문제 있을까요?","content":"채용 검진 결과 고혈압 기준에 들어간다고 하네요. 합불에 영향이 없을거라도 말씀하시긴 했지만 걱정이 되서요. 회사에서 안좋게 보는지 궁금합니다.","comments":[{"profile":"https://cdn.pixabay.com/photo/2017/10/05/10/26/lion-cub-2818957__340.jpg","nickname":"금요일조아","content":"혈당을 낮출수 약을 드시고 다시 검진을 받으시는 걸 추천드려요."},{"profile":"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg","nickname":"보도송송","content":"안녕하세요. BB회사 현직자입니다. 저도 같은 사례였는데 전혀 문제 없었어요."}]}]}
