import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';
import Colors from 'styles/colors';

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterHeader>
          Co-Lab
        </FooterHeader>
        <FooterBody>
          <div>대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</div>
          <br />

          <div> Copyright by (주)카페인.</div>
          <div> All right reserved. 이용약관 개인정보처리방침</div>
        </FooterBody>
        <FooterFooter>
          <ContactUsIcons>
            <li>icon1</li>
            <li>icon2</li>
            <li>icon3</li>
          </ContactUsIcons>
        </FooterFooter>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  height: 160px;
  padding: 32px;
  background-color: ${Colors.gray5};
`;

const FooterContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const FooterHeader = styled.div`
  flex: 1;
  ${Typography.H3}
  color: ${Colors.primary1}
`;

const FooterBody = styled.div`
  flex: 2;
  ${Typography.Body2}
  color: ${Colors.gray2}
`;

const FooterFooter = styled.div`
  flex: 1;
  color: ${Colors.gray4}
`;

const ContactUsIcons = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  gap: 6px;
`;
