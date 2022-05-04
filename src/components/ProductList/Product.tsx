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
import { ProductType } from "../../types/product";

interface IProductProps {
  product: ProductType;
}

const Product = (props:IProductProps) => {

  const { product } = props;

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
      <Link to={`/${product.id}`}>
        <FavContainer onClick={favEkle}>
          <IoHeartOutline />
        </FavContainer>
        <ImgContainer>
          <Img src="https://productimages.hepsiburada.net/s/49/222-222/10983949860914.jpg/format:webp" />
        </ImgContainer>
        <Body>
          <Title>{product.title}</Title>
          <Price>{product.price} TL</Price>
          <BtnContainer>
            <Button onClick={sepeteEkle}>Sepete Ekle</Button>
          </BtnContainer>
        </Body>
      </Link>
    </Card>
  );
};

export default Product;
