import React from "react";
import FilterList from "../../components/FilterList";
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
          <FilterList/>
        </Left>
        <Right>
            <ProductList/>
        </Right>
      </HomeRow>
    </Container>
  );
};

export default Home;
