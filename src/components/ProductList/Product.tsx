import React, {useState} from "react";
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
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/product";

interface IProductProps {
  product: ProductType;
}

const Product = (props:IProductProps) => {

  const { product } = props;

  const [isFav, setIsFav] = useState(false);
  const [isSepet, setIsSepet] = useState(false);

  const sepeteEkle = (e:any) => {
    setIsSepet(true);
    e.preventDefault();
  };

  const favEkle = (e:any) => {
    setIsFav(!isFav);
    e.preventDefault();
  };

  return (
    <Card>
      <Link to={`/${product.id}`}>
        <FavContainer isFav={isFav} onClick={favEkle}>
          {isFav ? <IoHeart /> : <IoHeartOutline />}
        </FavContainer>
        <ImgContainer>
          <Img src="https://productimages.hepsiburada.net/s/49/222-222/10983949860914.jpg/format:webp" />
        </ImgContainer>
        <Body>
          <Title>{product.title}</Title>
          <Price>{product.price} TL</Price>
          <BtnContainer>
            <Button isSepet={isSepet} onClick={sepeteEkle}>{isSepet ? 'Sepete Eklendi' : 'Sepete Ekle'}</Button>
          </BtnContainer>
        </Body>
      </Link>
    </Card>
  );
};

export default Product;
