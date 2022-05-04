import React from "react";
import {
  Header,
  HeaderSpan,
  HeaderTitle,
  ProductList,
  ProductSatici,
  Row,
} from "../../styled/Sepet.styled";
import ProductItem from "./ProductItem";
import Right from "./Right";

const SepetArea = () => {
  return (
    <Row>
      <div className="left">
        <Header>
          <HeaderTitle>Sepet</HeaderTitle>
          <HeaderSpan>1 ürün</HeaderSpan>
        </Header>
        <ProductList>
          <ProductSatici>
            Satıcı: <span>Bilal Karakollu</span>
          </ProductSatici>

          <ProductItem />
        
        </ProductList>
      </div>

      <Right />
    </Row>
  );
};

export default SepetArea;
