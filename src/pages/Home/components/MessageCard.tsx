import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';
import Colors from 'styles/colors';

function MessageCard() {
  return (
    <MessageSection className="text__hr">
      <MessageBody>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</MessageBody>
    </MessageSection>
  );
}

export default MessageCard;

const MessageSection = styled.div`
  margin: 0 auto 42px;
  padding: 33px 42px;
  height: 100px;
  max-width: 960px;
  background: var(--bg-color-primary1);
`;

const MessageBody = styled.div`
  ${Typography.H2}
  color: ${Colors.white};
`;
