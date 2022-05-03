import React from "react";
import Filter from "../../components/Filter";
import MobilMenu from "../../components/MobilMenu/MobilMenu";
import Product from "../../components/Product";
import { Container } from "../../styled/Global";
import { HomeRow, Left, Right } from "../../styled/Home.styled";
import { ProductRow } from "../../styled/Product.styled";

const Home = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <MobilMenu/>
      <HomeRow>
        <Left isOpen={isOpen}>
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
