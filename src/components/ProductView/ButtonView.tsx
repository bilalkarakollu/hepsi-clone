import React from "react";
import {
    ButtonsInputContainer,
    ProductAdetButton,
    ProductAdetButtons,
    ProductAdetInput,
    ProductButtons,
    ProductSepeteEkleButton,
  } from "../../styled/ProductDetay.styled";
  import { MdShoppingCart } from "react-icons/md";
const ButtonView = () => {
  return (
    <ProductButtons>
      <ProductAdetButtons>
        <ProductAdetButton>-</ProductAdetButton>
        <ButtonsInputContainer>
          <ProductAdetInput type="text" value="1" />
          <span>Adet</span>
        </ButtonsInputContainer>
        <ProductAdetButton>+</ProductAdetButton>
      </ProductAdetButtons>
      <div>
        <ProductSepeteEkleButton>
          <MdShoppingCart /> Sepete Ekle
        </ProductSepeteEkleButton>
      </div>
    </ProductButtons>
  );
};

export default ButtonView;
