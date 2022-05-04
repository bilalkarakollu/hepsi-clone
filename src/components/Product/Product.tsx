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
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Product = () => {

  const sepeteEkle = (e:any) => {
    alert("Sepete Eklendi");
    e.preventDefault();
  };

  const favEkle = (e:any) => {
    alert("fav Eklendi");
    e.preventDefault();
  };

  return (
    <Card>
      <Link to={'/55'}>
        <FavContainer onClick={favEkle}>
          <IoHeartOutline />
        </FavContainer>
        <ImgContainer>
          <Img src="https://productimages.hepsiburada.net/s/49/222-222/10983949860914.jpg/format:webp" />
        </ImgContainer>
        <Body>
          <Title>Apple MacBook Air M1 Çip 8GB 256GB SSD</Title>
          <Price>15.589,00 TL</Price>
          <BtnContainer>
            <Button onClick={sepeteEkle}>Sepete Ekle</Button>
          </BtnContainer>
        </Body>
      </Link>
    </Card>
  );
};

export default Product;
