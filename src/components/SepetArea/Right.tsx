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

const Right = () => {
  return (
    <div className="right">
      <TotalContainer>
        <TotalPrice>
          15.603,99 <span>TL</span>
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
            <div>Ürünler</div> <div>15.589,00 TL</div>
          </DescItem>
        </TotalDesc>
        <DescEkstra>Kuponlarım / İndirim kodu</DescEkstra>
      </TotalContainer>
    </div>
  );
};

export default Right;
