import styled, { keyframes } from "styled-components";

const ShimmerKeyframes = keyframes`
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
`;

export const Shimmer = styled.div`
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerKeyframes};
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 1200px 100%;
`;

export const ShimContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ShimImg = styled(Shimmer)`
    height: 250px;
    border-radius: 10px;
`;

export const ShimContent = styled.div`
    padding: 3px;
`;

export const ShimTitle = styled(Shimmer)`
    height: 24px;
    margin: 10px;
    border-radius: 10px;
`;