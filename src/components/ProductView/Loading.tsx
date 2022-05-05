import React from 'react';
import {
    Row,
    ImageContainer,
    AddContainer,
    ProductDegerlendirme,
    ProductInformation,
    ProductPrice,
    ProductPriceandRatings,
    ProductRatingsContainer,
    ProductTitle,
    StarContainer,
  } from "../../styled/ProductDetay.styled";
  import { ShimImg, ShimTitle } from '../../styled/Shimmer.styled';

const Loading = () => {
  return (
    <Row>
      <ImageContainer><ShimImg height='100%'/></ImageContainer>
      <ProductInformation>
          <div>
            <ProductTitle>
              <ShimTitle />
            </ProductTitle>
          </div>

          <ProductPriceandRatings>
            <div>
              <ProductPrice><ShimTitle /></ProductPrice>
            </div>
            <ProductRatingsContainer>
              <StarContainer>
              <ShimTitle />
              </StarContainer>
            </ProductRatingsContainer>
          </ProductPriceandRatings>

          <ProductDegerlendirme>
            <ShimTitle />
          </ProductDegerlendirme>
          
          <ShimTitle />

          <AddContainer>
            <ShimTitle />
          </AddContainer>
        </ProductInformation>
    </Row>
  )
}

export default Loading
