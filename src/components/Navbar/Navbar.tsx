import React from "react";
import { BsSearch, BsHeartFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import {
  Badge,
  BadgeContainer,
  BtnContainer,
  BtnGrey,
  BtnText,
  BtnWhite,
  InputContainer,
  NavImg,
  NavLogo,
  NavbarBox,
  SearchBtn,
  SearchContainer,
  SearchInput,
} from "../../styled/Navbar.styled";
import { Container } from "../../styled/Global";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <NavbarBox>
        <NavLogo>
          <Link to="/">
            <NavImg src={"/img/hepsiburada-logo.png"} alt="logo" />
          </Link>
        </NavLogo>

        <SearchContainer>
          <InputContainer>
            <BsSearch />
            <SearchInput
              type={"text"}
              placeholder="Ürün, kategori veya marka ara"
            />
          </InputContainer>
          <SearchBtn>Ara</SearchBtn>
        </SearchContainer>

        <BtnContainer>
          <BtnWhite>
            <BadgeContainer>
              <BsHeartFill />
              <Badge>0</Badge>
            </BadgeContainer>
            <BtnText>Favoriler</BtnText>
          </BtnWhite>
          <BtnGrey>
            <BadgeContainer>
              <MdShoppingCart />
              <Badge>0</Badge>
            </BadgeContainer>
            <BtnText>Sepet</BtnText>
          </BtnGrey>
        </BtnContainer>
      </NavbarBox>
    </Container>
  );
};

export default Navbar;
