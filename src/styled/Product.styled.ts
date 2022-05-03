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
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  overflow: hidden;
  min-height: 240px;
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
  margin: 4px 0;
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
  height: 40px;
`;

export const Button = styled.button`
  display: none;
  border: none;
  background: #e35600;
  color: white;
  padding: 0 10px;
  font-size: medium;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const FavContainer = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #F1F1F1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  svg {
    position: absolute;
    bottom: 7px;
    font-size: x-large;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  display: block;
  border-radius: 10px;

  &:hover {
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
`;
