import React from "react";
import {
  ProductAdet,
  ProductButton,
  ProductButtons,
  ProductImage,
  ProductImageContainer,
  ProductKargoTitle,
  ProductListItem,
  ProductPrice,
  ProductTitle,
} from "../../styled/Sepet.styled";
import { BsPlusLg, BsTrash } from "react-icons/bs";

const ProductItem = () => {
  return (
    <ProductListItem>
      <ProductImageContainer>
        <ProductImage src="https://productimages.hepsiburada.net/s/49/250/10983949860914.jpg" />
      </ProductImageContainer>
      <div>
        <ProductTitle>
          Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13&quot; QHD Taşınabilir
          Bilgisayar Uzay Grisi MGN63TU/A
        </ProductTitle>
        <ProductKargoTitle>En geç Perşembe günü kargoda</ProductKargoTitle>
        <ProductPrice>
          <span>15.200,00</span> TL
        </ProductPrice>
      </div>
      <ProductButtons>
        <ProductButton>
          <BsPlusLg />
        </ProductButton>
        <ProductAdet>1</ProductAdet>
        <ProductButton>
          <BsTrash />
        </ProductButton>
      </ProductButtons>
    </ProductListItem>
  );
};

export default ProductItem;
