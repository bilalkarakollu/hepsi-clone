import React from "react";
import {
  TotalBtn,
  TotalContainer,
  TotalDesc,
  TotalPrice,
  TotalTitle,
  DescEkstra,
  DescItem,
} from "../../styled/Sepet.styled";
import { useAppSelector } from "../../store/hooks";

const Right = () => {

  const { totalPrice } = useAppSelector(state => state.sepet);
  
  return (
    <div className="right">
      <TotalContainer>
        <TotalPrice>
          {totalPrice + 15} <span>TL</span>
        </TotalPrice>
        <TotalBtn>Alışverişi tamamla</TotalBtn>
        <TotalTitle>
          Sepetindekileri, alışveriş kredisine özel vade seçenekleriyle
          alabilirsin.
        </TotalTitle>
        <TotalDesc>
          <DescItem>
            <div>Kargo</div> <div>14,99 TL</div>
          </DescItem>
          <DescItem>
            <div>Ürünler</div> <div>{totalPrice} TL</div>
          </DescItem>
        </TotalDesc>
        <DescEkstra>Kuponlarım / İndirim kodu</DescEkstra>
      </TotalContainer>
    </div>
  );
};

export default Right;
