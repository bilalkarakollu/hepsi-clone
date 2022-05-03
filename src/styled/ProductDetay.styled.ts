import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 2rem 0;
  height: 100%;
  grid-template-columns: 1fr;

  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 550px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ProductInformation = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
`;

export const ProductTitle = styled.div`
  color: #484848;
  line-height: 1.2;
  font-size: 17px;
  font-weight: 600;
  margin: 0;
`;

export const ProductPriceandRatings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const ProductPrice = styled.span`
  color: #484848;
  font-size: 32px;
  font-weight: 600;
`;

export const ProductPriceKur = styled.span`
  color: #484848;
  font-size: 14px;
  font-weight: 600;
`;

export const ProductRatingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.3rem;
    font-size: 20px;
`;

export const RatingRate = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ProductDegerlendirme = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: #484848;
  font-size: 12px;
  font-weight: 700;
  gap: 0.5rem;
`;

export const ProductButtons = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid #e5e5e5;
`;

export const ButtonsInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  background-color: white;
  span {
    font-size: 10px;
  }
`;

export const ProductAdetButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 45px;
  padding: 3px 0;
  background-color: #dddddd;
  width: fit-content;
  overflow: hidden;
  border-radius: 5px;
`;

export const ProductAdetInput = styled.input`
  width: 39px;
  height: 25px;
  border: none;
  outline: none;
  text-align: center;
`;

export const ProductAdetButton = styled.button`
  width: 25px;
  height: 100%;
  border: none;
  outline: none;
  background-color: #dddddd;
  cursor: pointer;
  margin: auto;
  font-weight: 700;
  font-size: large;
`;

export const ProductSepeteEkleButton = styled.button`
  padding: 16px 24px;
  font-size: 15px;
  line-height: 1.1;
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #ff6000;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg{
      font-size: 20px;
  }

  &:hover {
    background-color: #eb5800;
  }
`;

export const ProductOzellikTitle = styled.div`
  font-size: 14px;
`;

export const ProductOzellikTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  tr td {
    padding: 4px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr td:nth-last-child(even) {
    font-weight: 500;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const AddItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;

  svg {
    font-size: 20px;
  }
`;

export const SellerContainer = styled.div`
  margin-top: 10px;
  zoom: 1;
  width: fit-content;
  padding: 5px;
  height: 20px;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  line-height: 1;
  font-size: 13px;
  font-weight: 800;
  color: #919191;
  span {
    color: #537ecf;
  }
`;
