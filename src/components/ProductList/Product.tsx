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
import { useAppDispatch} from "../../store/hooks";
import { setSepetProductOdd } from "../../store/slices/sepetSlice";
interface IProductProps {
  product: ProductType;
}

const Product = (props:IProductProps) => {
  const dispatch = useAppDispatch();

  const { product } = props;

  const [isFav, setIsFav] = useState(false);
  const [isSepet, setIsSepet] = useState(false);

  const sepeteEkle = (e:React.MouseEvent<HTMLElement>) => {
    setIsSepet(true);
    dispatch(setSepetProductOdd(product,1));
    e.preventDefault();
  };

  const favEkle = (e:React.MouseEvent<HTMLElement>) => {
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
