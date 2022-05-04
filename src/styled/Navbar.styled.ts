import styled from "styled-components";

export const NavbarBox = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  column-gap: 3rem;
  padding: 0 1rem;
  height: 100%;
  align-items: center;
  margin: 1rem 0;

  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 3fr 5fr 5fr;
    height: 45px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  height: 23px;
  order: 0;
  @media ${(props) => props.theme.media.lg} {
    height: 30px;
  }
`;

export const NavImg = styled.img`
  object-fit: contain;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 45px;
  order: 2;
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  @media ${(props) => props.theme.media.lg} {
    order: 1;
    grid-row: inherit;
    grid-column: inherit;
  }
`;

export const InputContainer = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  border: 2px solid #919191;
  border-radius: 4px 0 0 4px;
  -ms-flex-align: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  height: 91%;
  justify-content: space-between;
  overflow: hidden;
  color: #919191;

  svg {
    padding: 0 10px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1px;
  margin: 0;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  &::placeholder {
    color: #bfbfbf;
  }
`;

export const SearchBtn = styled.button`
  height: 100%;
  align-items: center;
  border: 2px solid #919191;
  background-color: #919191;
  padding: 0 16px;
  border-radius: 0 4px 4px 0;
  color: #fff;
  line-height: 1.07;
  font-size: 15px;
  letter-spacing: -0.24px;
  font-weight: 600;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  height: 45px;
  order: 1;
  @media ${(props) => props.theme.media.lg} {
    order: 3;
  }
`;

export const Btn = styled.button`
  height: 100%;
  outline: none;
  border: 2px solid #919191;
  border-radius: 4px;
  width: 50px;
  background-color: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    font-size: large;
  }

  @media ${(props) => props.theme.media.lg} {
    width: 136px;
  }
`;

export const BtnText = styled.span`
  display: none;
  @media ${(props) => props.theme.media.lg} {
    display: block;
  }
`;

export const BtnWhite = styled(Btn)`
  background-color: #fff;
  color: #919191;
`;

export const BtnGrey = styled(Btn)`
  background-color: #919191;
  color: #fff;
`;

export const BadgeContainer = styled.span`
  position: relative;
  svg{
    margin-top: 4px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  top: -8px;
  right: -10px;
  border: 1px solid white;
  background-color: #ff6000;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #fff;
  overflow: hidden;
`;
