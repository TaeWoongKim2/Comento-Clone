import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Colors from 'styles/colors';
import Typography from 'styles/typography';

import {
  ICommunity,
  IMentoComent,
} from 'types/Community';

type CampCardsType = {
  community: ICommunity;
}

function CommunityCard({
  community,
}: CampCardsType) {
  return (
    <CommunityWrapper>
      <CommunityQuestionContainer>
        <CommunityHeader>
          {community.tags.map((tag: string, index: number) => (
            <CommunityLabel
              key={`${`${index}-${tag}`}`}
              active={index === 0}
            >
              {tag}
            </CommunityLabel>
          ))}
        </CommunityHeader>

        <CommunityBody>
          <CommunityTitle>
            {community.title}
          </CommunityTitle>

          <CommunityContent>
            <p className="card__question">{community.content}</p>
          </CommunityContent>
        </CommunityBody>
      </CommunityQuestionContainer>

      <CommunityAnswerContainer>
        <CommunityAnswerBody>
          {community.comments.map(((mentoComent: IMentoComent, index: number) => (
            <CommunityAnswer key={`${`${mentoComent.nickname}-${index}`}`}>
              <CommunityAnswerProfile>
                <MentoProfile image={mentoComent.profile} />
              </CommunityAnswerProfile>
              <CommunityAnswerContent>
                <MentoNickName>
                  {mentoComent.nickname}
                </MentoNickName>
                <MentoAnswer>
                  {mentoComent.content
                    ? mentoComent.content
                    : '\u00A0'}
                </MentoAnswer>
              </CommunityAnswerContent>
            </CommunityAnswer>
          )))}
        </CommunityAnswerBody>

        <CommunityAnswerFooter>
          <AnswerMoreLink to={`/community/${community.id}`}>
            + 더보기
          </AnswerMoreLink>
        </CommunityAnswerFooter>
      </CommunityAnswerContainer>
    </CommunityWrapper>
  );
}

export default CommunityCard;

const CommunityWrapper = styled.div`
  height: 320px;
  padding: 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: ${Colors.white};
  border: 1px solid ${Colors.gray4};
  border-radius: 10px;
  flex: 1;
  gap: 8px;
  overflow: auto;
`;
const CommunityQuestionContainer = styled.div``;
const CommunityAnswerContainer = styled.div``;

const CommunityHeader = styled.div`
  ${Typography.Caption}
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
`;

const CommunityBody = styled.div`
  ${Typography.Body1}
  margin-bottom: 16px;
`;
const CommunityTitle = styled.div`
  ${Typography.Body1}
  margin-bottom: 10px;
`;
const CommunityContent = styled.div`
  ${Typography.Body2}
`;

const CommunityAnswerBody = styled.div`
  margin: 0 0 16px;
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
const CommunityAnswerFooter = styled.div`
  ${Typography.Caption}
  text-align: center;
`;

const CommunityLabel = styled.div<{ active: boolean }>`
  height: 22px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? Colors.white : Colors.black)};
  background: ${(props) => (props.active ? Colors.primary1 : Colors.gray4)};
  border-radius: 4px;
`;

const CommunityAnswer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 8px;
`;
const CommunityAnswerProfile = styled.div``;
const CommunityAnswerContent = styled.div`
  min-width: 0;
  display: flex;
  flex-flow: column;
  gap: 6px;
`;
const MentoProfile = styled.div<{ image: string }>`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  ${(props) => (props.image
    ? `background: url(${props.image});`
    : `background-color: ${Colors.gray4};`)}
`;
const MentoNickName = styled.div`
  ${Typography.Caption}
`;
const MentoAnswer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AnswerMoreLink = styled(Link)`
  color: ${Colors.secondary1}
`;
