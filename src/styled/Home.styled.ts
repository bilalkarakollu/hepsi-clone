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

interface LeftProps {
  isOpen: boolean;
}

export const Left = styled.div<LeftProps>`
  display: none;
  margin: 20px 0;
  @media ${(props) => props.theme.media.lg} {
    display: block;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
  display: grid;
  position: fixed;
  background-color: white;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  top: -10px;

  > * {
    z-index: 10;
  }
  
  `}
`;

export const Right = styled.div`
  margin: 20px 0;
`;

export const FilterCancel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
  top: 5px;
  right: 20px;
  background-color: #FFA900;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  z-index: 20;
`;
