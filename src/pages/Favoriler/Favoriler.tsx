import React from "react";
import ProductList from "../../components/ProductList";
import { useAppSelector } from "../../store/hooks";
import { Container } from "../../styled/Global";
import { Row, Header } from "../../styled/Favoriler.styled";

const Favoriler = () => {
  const { products, error, loading } = useAppSelector((state) => state.favori);

  return (
    <>
    <Header>Favoriler</Header>
    <Container>
      <Row>
        <ProductList products={products} error={error} loading={loading} />
      </Row>
    </Container>
    </>
  );
};

export default Favoriler;
