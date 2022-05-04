import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  BtnContainer,
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
import SepetBtn from "./SepetBtn";
import FavBtn from "./FavBtn";

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
          <FavBtn/>
          <SepetBtn/>
        </BtnContainer>
      </NavbarBox>
    </Container>
  );
};

export default Navbar;
