import styled from "styled-components";

export const HomeRow = styled.div`
  display: grid;
  gap: 0.8rem;

  @media ${(props) => props.theme.media.xs} {
    grid-template-columns: 12fr;
  }
  @media ${(props) => props.theme.media.sm} {
    grid-template-columns: 12fr;
  }
  @media ${(props) => props.theme.media.md} {
    grid-template-columns: 12fr;
  }
  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 2fr 10fr;
  }
  @media ${(props) => props.theme.media.xl} {
    grid-template-columns: 2fr 10fr;
  }
`;

export const Left = styled.div`
  display: none;
  margin: 20px 0;
  @media ${(props) => props.theme.media.lg} {
    display: block;
  }
`;

export const Right = styled.div`
margin: 20px 0;
`;
