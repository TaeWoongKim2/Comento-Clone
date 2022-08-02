import React from 'react';
import styled from 'styled-components';
import Colors from 'styles/colors';

function ComboBox() {
  return (
    <ComboBoxSection>
      <div className="box--content">
        <div className="box--title">
          {'개발은 \n카페인과 함께'}
        </div>
        <div
          className="box--image"
        />
      </div>
    </ComboBoxSection>
  );
}

export default ComboBox;

const ComboBoxSection = styled.section`
  margin: 0 0 64px;
  padding: 104px 0 56px;
  color: ${Colors.white};
  background: ${Colors.primary3};

  .box--content {
    margin: 0 auto;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .box--title {
      font-weight: 700;
      font-size: 48px;
      line-height: 65px;
      color: #FFFFFF;
      white-space: pre;
    }
    .box--image {
      border-radius: 10px;
      background-image: url(https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg);
      height: 400px;
      width: 600px;
      background-size: cover;
    }
  }
`;
