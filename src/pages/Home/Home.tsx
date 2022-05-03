import React from "react";
import Filter from "../../components/Filter";
import Product from "../../components/Product";
import { Container } from "../../styled/Global";
import { HomeRow, Left, Right } from "../../styled/Home.styled";
import { ProductRow } from "../../styled/Product.styled";

const Home = () => {
  return (
    <Container>
      <HomeRow>
        <Left>
          <Filter/>
        </Left>
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
