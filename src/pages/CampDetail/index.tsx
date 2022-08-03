import React from 'react';
// import Mento from 'assets/images/Camp/mento-woong.jpeg';
import styled from 'styled-components';
import Typography from 'styles/typography';
import Colors from 'styles/colors';

function CampDetails() {
  return (
    <div>
      <ComboBox>
        <ComboBoxContainer>
          <div className="combobox--header">
            <div className="combobox--label">2기 모집</div>
            <div className="combobox--title">
              React 초보자를 위한
              {'\n'}
              실무 프로젝트로 역량 업그레이드
            </div>
            <div className="combobox--subtitle">React만큼은 실무에 제대로 활용하세요.</div>
          </div>
          <div />
        </ComboBoxContainer>
      </ComboBox>
      <div className="wrapper">
        <div className="container intro">
          <div>
            <div>
              대답없는 VOD 강의에 라이브로 답하다.
              React만큼은 실무에 제대로 활용할 수 있도록,
              오프라인 강의와 온라인 VOD의 장점만 모았습니다.
            </div>
            <div>
              React만큼은 실무에 제대로 활용할 수 있도록,
              오프라인 강의와 온라인 VOD의 장점만 모았습니다.
            </div>
          </div>
          <div>
            <ul>
              <li>
                <div>LIVE CLASS</div>
                <div>라이브로 묻고 해답을 얻으세요.</div>
              </li>
              <li>
                <div>KEEP DOING</div>
                <div>미루지 말고 실시간으로 만나요.</div>
              </li>
              <li>
                <div>CAN DO</div>
                <div>실무 과제를 풀며 제대로 활용해요.</div>
              </li>
            </ul>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="container tobe">
          <div>
            트레이닝이 끝난 당신은
            이렇게 됩니다.
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="container reviews">
          <div>
            먼저 트레이닝 받은 분들의
            이야기를 들어보세요.
          </div>
          <div>
            <div className="review-cards">
              <div className="review-card">
                <div className="review-card-emoji">
                  👍🏻
                </div>
                <div className="review-card-content">
                  저는 완전히 모르는 상태에서 시작했고 기대도
                  높지 않았는데, 끝까지 해내고 보니 굉장히
                  성장한 느낌이에요.
                  직장 다니면서 뭔가 끝까지 해본 게 처음이라..

                  {'\''}
                  아무것도 모르는 사람도 할 수 있어요
                  {'\''}
                  라는 문구가 진짜 거짓이 아니었네요.
                </div>
                <div className="review-card-reviewer">
                  - 수료생 김태희님
                </div>
              </div>
              <div className="review-card">
                <div className="review-card-content">
                  라이브니까, 공부하면서 궁금한 걸 바로바로
                  물어볼 수 있는게 제일 좋았어요!

                  VOD 강의 많이 들어봤지만 VOD는 궁금한 걸
                  물어볼 수도 없고, 물어볼 수 있다고 해도
                  답변 받는데 진짜 오래 걸렸거든요.
                  소통이 즉각적이라는 게 가장 좋았어요.
                </div>
                <div className="review-card-reviewer">
                  - 수료생 임미성님
                </div>
              </div>
              <div className="review-card">
                <div className="review-card-content">
                  매주 받는 강의 자료랑 과제 내용이 업무에서
                  흔하게 일어날 수 있는 상황 중심이어서,
                  {'\''}
                  우리 회사라면 이런 식으로 해볼 수 있겠다.
                  {'\''}
                  라고 생각하며 수업을 들었구요.

                  이론도 실무랑 연계되는 내용으로 알려주셔서
                  바로 업무에 적용할 수 있었어요.
                </div>
                <div className="review-card-reviewer">
                  - 수료생 김태형님
                </div>
              </div>
              <div className="review-card">
                <div className="review-card-emoji">
                  🍀
                </div>
                <div className="review-card-content">
                  멘토님도 퇴근하고 강의하시느라 힘드실 텐데
                  라이브 강의 때마다 정말 정성스럽게
                  과제 리뷰랑 피드백을 너무 잘 해주셨구요.

                  꼭 강의 때가 아니더라도어려운 거 있을 때마다
                  하나하나 같이 해주시고 질문도 잘 받아주셔서
                  더 열심히 할 수 있었어요.
                </div>
                <div className="review-card-reviewer">
                  - 수료생 강지현님
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mento">
          <div>
            <div>&quot;</div>
            <div>
              생성부터 배포까지,
              저와 함께 React 프로젝트를 시작해보세요!
            </div>
          </div>
          <div>
            안녕하세요.
            저는 스타트업에서 서비스 출시와 운영을 경험했고 1인 기업으로 다수의 서비스를 외주 개발한 경험이 있는 멘토입니다.

            그 과정에서 개발 역량과 생산성 향상에 대한 노력, 소통과 협업에 대한 많은 고민과 시행착오를 거치며 나름대로의 노하우를 찾게 되었습니다.

            또한 신입, 주니어 분들의 취업 멘토링을 다수 진행하며, 회사들이 원하는 인재에 대해 많이 고민하고 이해할 수 있게 되었고,
            주니어 분들이 어떤 방향으로 준비하고 성장하면 좋을지에 대한 여러 고민들을 해왔습니다.

            그래서 이번 실무 PT에서도 진짜 주니어 개발자에게 도움이 될 수 있는 내용만 꽉 담았습니다.

            저와 함께 프로젝트를 진행하며 실무 역량을 업그레이드 해 보세요!
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <dl>
                <dt>현) 스타트업 프론트엔드 개발</dt>
                <dd>
                  - React, Typescript 기반의 서비스 개발/운영
                </dd>

                <dt>전) 스타트업 풀스택 개발</dt>
                <dd>
                  - 온라인 운동 코칭 서비스 개발 리드
                  - Typescript, Python, Django, AWS, React 개발
                </dd>

                <dt>전) 대기업 SI기업 데이터 엔지니어</dt>
                <dd>
                  - 국내 최대 통신사 빅데이터 시스템 운영/개발
                  - 빅데이터 플랫폼 개발
                  - 프로젝트 매니징 역할 수행
                </dd>

                <dt>기타 이력</dt>
                <dd>
                  - S사 소프트웨어 멤버십 활동
                  - S사 전환형 인턴
                  - 대학 시절, 공모전 5회 수상
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="container recomended">
          <div>
            이런 분들이라면 꼭 들으세요!
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="container lecture">
          <div>
            React,
            할 수 있게 만드는 3가지 학습 포인트
          </div>
          <div>
            <ul>
              <li>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <div>100% 라이브 세션</div>
                  <div>
                    주차별 세션과 스터디까지,
                    라이브니까 몰입할 수 있어요.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <div>실무 실습 과제</div>
                  <div>
                    매주 주어지는 실무 실습 과제로
                    이론부터 실습까지 마스터하세요.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt="" />
                </div>
                <div>실시간 즉문즉답</div>
                <div>
                  <div>
                    질문이 생기면 언제나
                    실시간으로 묻고 답변 받으세요.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div>FAQ</div>
        <div>
          <ul>
            <li>
              <div>
                <div>Q.</div>
                <div>
                  처음 개발에 입문하는 사람도 참여할 수 있나요?
                </div>
              </div>
              <div>
                <div>A.</div>
                <div>
                  네, 당연하죠. 같이 열심히 노력해보아요 ^^
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>Q.</div>
                <div>
                  React 경험이 없는데 참여할 수 있나요?
                </div>
              </div>
              <div>
                <div>A.</div>
                <div>
                  React 경험이 있는 분들이 협업 관점에서 업그레이드 할 수 있게 도와드리는데 목적이 있는 클래스입니다.
                  React 기초 강의는 제공하지 않기 때문에 따로 React 공부 하실 수 있는 분들께 추천드립니다.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>Q.</div>
                <div>
                  실무PT, 직무부트캠프와 어떤 차이점이 있나요?
                </div>
              </div>
              <div>
                <div>A.</div>
                <div>
                  실무PT는 직무체험을 넘어 현업에 실무 스킬을 적용할 수 있도록 최적화된 프로그램입니다.
                  직무를 경험하는 것에 초점이 맞춰진 직무부트캠프와 달리 멘토와의 1:1 질의응답, 정기 스터디세션,
                  이론강의 등 실무 맞춤형 과정이 더 제공되어 현업에 적용할 수 있을 때까지 도와드립니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CampDetails;

const ComboBox = styled.div`
  height: 320px;
  padding: 96px 0 32px;
  background: #2284AD;
`;

const ComboBoxContainer = styled.div`
  height: -webkit-fill-available;
  max-width: 960px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;

  .combobox--header {
    color: ${Colors.white};

    .combobox--label {
      ${Typography.Caption};
      width: fit-content;
      height: 24px;
      border: 1px solid ${Colors.white};
      border-radius: 6px;
      margin-bottom: 12px;
      padding: 4.5px 8px;
    }
    .combobox--title {
      ${Typography.H1};
      white-space: pre-wrap;
      margin-bottom: 12px;
    }
    .combobox--subtitle {
      ${Typography.Body2};
    }
  }
`;
