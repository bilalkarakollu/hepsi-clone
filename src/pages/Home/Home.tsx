import React from "react";
import Product from "../../components/Product";
import { Container } from "../../styled/Global";
import { HomeRow, Left, Right } from "../../styled/Home.styled";
import { ProductRow } from "../../styled/Product.styled";

const Home = () => {
  return (
    <Container>
      <HomeRow>
        <Left>grid1</Left>
        <Right>
          <ProductRow>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductRow>
        </Right>
      </HomeRow>
    </Container>
  );
};

export default Home;
