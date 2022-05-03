import React from "react";
import { Container } from "../../styled/Global";
import {
  AddContainer,
  AddItemBtn,
  ButtonsInputContainer,
  ImageContainer,
  ProductAdetButton,
  ProductAdetButtons,
  ProductAdetInput,
  ProductButtons,
  ProductDegerlendirme,
  ProductImage,
  ProductInformation,
  ProductOzellikTable,
  ProductOzellikTitle,
  ProductPrice,
  ProductPriceKur,
  ProductPriceandRatings,
  ProductRatingsContainer,
  ProductSepeteEkleButton,
  ProductTitle,
  RatingRate,
  Row,
  SellerContainer,
  StarContainer
} from "../../styled/ProductDetay.styled";
import { MdShoppingCart, MdStarOutline, MdOutlineBookmarkBorder } from "react-icons/md";
import { BsBookmark, BsHeart, BsBell, BsArrowLeftRight, BsStar } from "react-icons/bs";

const ProductDetay = () => {
  return (
    <Container>
      <Row>
        <ImageContainer>
          <ProductImage src="https://productimages.hepsiburada.net/s/49/550/10983949860914.jpg/format:webp" />
        </ImageContainer>
        <ProductInformation>
          <div>
            <ProductTitle>
              Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13&quot; QHD
              Taşınabilir Bilgisayar Uzay Grisi MGN63TU/A
            </ProductTitle>
          </div>
          <ProductPriceandRatings>
            <div>
              <ProductPrice>15.589,00</ProductPrice>
              <ProductPriceKur> TL </ProductPriceKur>
            </div>
            <ProductRatingsContainer>
              <RatingRate>4.9</RatingRate>
              <StarContainer>
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
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
                <MdShoppingCart/> Sepete Ekle
              </ProductSepeteEkleButton>
            </div>
          </ProductButtons>
          <AddContainer>
            <AddItemBtn><BsHeart/> Beğen</AddItemBtn>
            <AddItemBtn><BsBookmark/> Listeme Ekle</AddItemBtn>
            <AddItemBtn><BsBell/> İndirim Alarmı</AddItemBtn>
            <AddItemBtn><BsArrowLeftRight/> Karşılaştır</AddItemBtn>
          </AddContainer>
        </ProductInformation>
      </Row>
      <div>
        <ProductOzellikTitle>
          <h2>
            Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13&quot; QHD
            Taşınabilir Bilgisayar Uzay Grisi MGN63TU/A Özellikler
          </h2>
        </ProductOzellikTitle>
        <div>
          <ProductOzellikTable>
            <tbody>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
              <tr>
                <td>asdasd</td>
                <td>asdasd</td>
              </tr>
            </tbody>
          </ProductOzellikTable>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetay;
