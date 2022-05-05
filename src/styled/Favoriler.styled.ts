import styled from "styled-components";

export const Row = styled.div`
  @media ${(props) => props.theme.media.lg} {
    display: block;
    margin: 6rem;
  }
`;

export const Header = styled.div`
 
  height: 30px;
  background-color: ${({ theme }) => theme.colors.theme};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  @media ${(props) => props.theme.media.lg} {
    height: 40px;
    padding: 2rem;
    font-size: 2rem;
  }
`;
