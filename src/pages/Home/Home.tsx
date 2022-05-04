import React from "react";
import Filter from "../../components/Filter";
import MobilMenu from "../../components/MobilMenu/MobilMenu";
import ProductList from "../../components/ProductList";
import { Container } from "../../styled/Global";
import { HomeRow, Left, Right } from "../../styled/Home.styled";


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
            <ProductList/>
        </Right>
      </HomeRow>
    </Container>
  );
};

export default Home;
