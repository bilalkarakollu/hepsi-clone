import React from 'react'
import {
    BsBookmark,
    BsHeart,
    BsBell,
    BsArrowLeftRight,
    BsStarFill,
    BsStarHalf,
  } from "react-icons/bs";
  import ButtonView from "./ButtonView";
  import {
    AddContainer,
    AddItemBtn,
    ProductDegerlendirme,
    ProductInformation,
    ProductPrice,
    ProductPriceKur,
    ProductPriceandRatings,
    ProductRatingsContainer,
    ProductTitle,
    RatingRate,
    SellerContainer,
    StarContainer,
  } from "../../styled/ProductDetay.styled";
import { ProductType } from '../../types/product';

interface IProps {
    product: ProductType
}
  
const ProductRight = (props:IProps) => {

    const { product } = props;
    
  return (
    <ProductInformation>
          <div>
            <ProductTitle>
              {product.title}
            </ProductTitle>
          </div>
          <ProductPriceandRatings>
            <div>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductPriceKur> TL </ProductPriceKur>
            </div>
            <ProductRatingsContainer>
              <RatingRate>4.9</RatingRate>
              <StarContainer>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </StarContainer>
            </ProductRatingsContainer>
          </ProductPriceandRatings>
          <ProductDegerlendirme>
            <span>319</span>
            <span>Değerlendirme</span>
          </ProductDegerlendirme>
          <SellerContainer>
            Satıcı: <span>Bilal Karakollu</span>
          </SellerContainer>
          
            <ButtonView product={product}/>

          <AddContainer>
            <AddItemBtn>
              <BsHeart /> Beğen
            </AddItemBtn>
            <AddItemBtn>
              <BsBookmark /> Listeme Ekle
            </AddItemBtn>
            <AddItemBtn>
              <BsBell /> İndirim Alarmı
            </AddItemBtn>
            <AddItemBtn>
              <BsArrowLeftRight /> Karşılaştır
            </AddItemBtn>
          </AddContainer>
        </ProductInformation>
  )
}

export default ProductRight
