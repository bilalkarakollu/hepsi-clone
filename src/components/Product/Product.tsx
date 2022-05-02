import React from "react";
import {
  Card,
  Body,
  BtnContainer,
  Button,
  FavContainer,
  Img,
  ImgContainer,
  Price,
  Title,
} from "../../styled/Product.styled";

const Product = () => {
  return (
    <Card>
      <FavContainer></FavContainer>
      <ImgContainer>
        <Img src="https://productimages.hepsiburada.net/s/49/222-222/10983949860914.jpg/format:webp" />
      </ImgContainer>
      <Body>
        <Title>Apple MacBook Air M1 Çip 8GB 256GB SSD</Title>
        <Price>15.589,00 TL</Price>
        <BtnContainer>
          <Button>Sepete Ekle</Button>
        </BtnContainer>
      </Body>
    </Card>
  );
};

export default Product;
