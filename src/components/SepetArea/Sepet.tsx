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
import { useAppSelector } from "../../store/hooks";

const SepetArea = () => {
  const { products, urunAdet } = useAppSelector((state) => state.sepet);

  return (
    <Row>
      <div className="left">
        <Header>
          <HeaderTitle>Sepet</HeaderTitle>
          <HeaderSpan>{urunAdet} ürün</HeaderSpan>
        </Header>
        {urunAdet > 0 ? (
          <ProductList>
            <ProductSatici>
              Satıcı: <span>Bilal Karakollu</span>
            </ProductSatici>

            {products.map((product) => (
              <ProductItem key={Number(product.id)} product={product} />
            ))}
          </ProductList>
        ) : (
          "Sepetiniz boş."
        )}
      </div>

      {urunAdet > 0 && <Right />}
    </Row>
  );
};

export default SepetArea;
