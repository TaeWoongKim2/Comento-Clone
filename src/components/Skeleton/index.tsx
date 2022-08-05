import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLElement> {
  width?: number;
  animated?: boolean;
}

export default function Skeleton(props: Props) {
  const {
    width = 250,
    animated = false,
    ...restProps
  } = props;

  return (
    <Container
      {...restProps}
      width={width}
      animated={animated}
    />
  );
}

const Container = styled.div<{
  width: number
  animated: boolean
}>`
  background-color: #d7dbe2;
  display: inline-block;
  width: ${(props) => props.width || '250px'};
  ${(props) => props.animated
    && css`
      background-image: linear-gradient(
        135deg,
        #bcbcbc 0%,
        #ebeef2 40%,
        #bcbcbc 80%,
        #ebeef2 100%
      );
      background-size: 400% 100%;
      animation: ${skeletonAnimation} 1s linear infinite;
    `}
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 50% 100%;
  }
`;
