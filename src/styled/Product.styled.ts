import styled from "styled-components";

export const ProductRow = styled.div`
  display: grid;
  gap: 1rem;
  @media ${(props) => props.theme.media.xs} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${(props) => props.theme.media.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${(props) => props.theme.media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.media.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ImgContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  min-height: 155px;
  @media ${(props) => props.theme.media.lg} {
    border: 1px solid #e6e6e6;
    min-height: 240px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  position: relative;
  padding: 14px 16px 16px;
`;

export const Title = styled.div`
  font-size: small;
  font-weight: 400;
  min-height: 31px;
  @media ${(props) => props.theme.media.lg} {
    min-height: inherit;
    margin: 4px 0;
  }
`;

export const Price = styled.div`
  font-size: large;
  font-weight: 600;
  margin: 20px 0;
`;

export const BtnContainer = styled.div`
  bottom: 2px;
  display: block;
  width: 100%;
  height: 30px;

  @media ${(props) => props.theme.media.lg} {
    height: 40px;
  }
`;

interface IButtonProps {
  isSepet: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: block;
  padding: 0 10px;
  font-size: small;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid lightgray;
  color: black;
  background-color: inherit;
  transition: 400ms;

  @media ${(props) => props.theme.media.lg} {
    display: none;
    border: none;
    background: ${(props) => (props.isSepet ? "#68BC39" : "#FF6000")};
    color: white;
    font-size: medium;
    font-weight: 600;

    &:hover {
      background: ${(props) => (props.isSepet ? "#68BC39" : "#e35600")};
    }
  }
`;

interface IFavProps {
  isFav: boolean;
}

export const FavContainer = styled.div<IFavProps>`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #f1f1f1;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  svg {
    position: absolute;
    bottom: 7px;
    font-size: 20px;
    color: ${(props) => (props.isFav ? "#e35600" : "#898989")};
  }

  @media ${(props) => props.theme.media.lg} {
    display: none;
    width: 40px;
    height: 40px;

    svg {
      font-size: x-large;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  display: block;
  border-radius: 10px;

  &:hover {
    @media ${(props) => props.theme.media.lg} {
      box-shadow: rgb(0 0 0 /8%) 0px 8px 32px 0px;

      ${FavContainer} {
        display: flex;
      }
      ${Button} {
        display: block;
      }
      ${ImgContainer} {
        border-color: white;
      }
    }
  }
`;
