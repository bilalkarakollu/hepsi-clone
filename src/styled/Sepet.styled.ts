import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  gap: 1rem;
  margin: 2rem 0;

  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 10fr 2fr;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.7rem;
`;

export const HeaderTitle = styled.div`
  font-size: 25px;
  margin: 0;
  font-weight: 600;
  line-height: 1.5;
`;

export const HeaderSpan = styled.span`
  margin-top: 4px;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.045rem;
`;

export const ProductList = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

export const ProductSatici = styled.div`
  font-size: 12px;
  color: grey;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem;
  span {
    color: black;
    font-weight: 500;
  }
`;

export const ProductListItem = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 2fr 10fr 1fr;
    gap: 1rem;
  }
`;

export const ProductImageContainer = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  padding: 5px;
  margin: auto;
  @media ${(props) => props.theme.media.lg} {
    margin: inherit;
    width: 104px;
  height: 104px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`;

export const ProductKargoTitle = styled.div`
  margin: 5px 0;
  font-size: 12px;
  font-weight: 600;
  color: #877c6e;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  margin-top: 15px;
  font-weight: 700;
  span {
    font-size: 18px;
  }
`;

export const ProductButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${(props) => props.theme.media.lg} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProductButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #e5e5e5;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #ff6000;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    color: white;
    background-color: #ff6000;
  }
`;

export const ProductAdet = styled.div`
  font-weight: 500;
  user-select: none;
`;

export const TotalContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

export const TotalPrice = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  padding: 1rem;
  span {
    font-size: 16px;
  }
`;

export const TotalBtn = styled.div`
  margin: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background-color: #ff6000;
  color: white;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: 150ms;
  margin-bottom: 1rem;
`;

export const TotalTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  background-color: #fdf6ff;
  color: #693597;
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

export const TotalDesc = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 1rem;
`;

export const DescItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

export const DescEkstra = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 1rem;
  transition: 150ms;
  background-color: #ffece0;
  color: #ff6000;
  margin: 0 1rem 1rem 1rem;
  border-radius: 10px;
`;
