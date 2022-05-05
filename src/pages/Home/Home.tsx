import React, { useEffect } from "react";
import FilterList from "../../components/FilterList";
import MobilMenu from "../../components/MobilMenu/MobilMenu";
import ProductList from "../../components/ProductList";
import { Container } from "../../styled/Global";
import { HomeRow, Left, Right, FilterCancel } from "../../styled/Home.styled";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { BsXLg } from "react-icons/bs";
import { setIsOpen } from "../../store/slices/filterSlice";
import { fetchProductsAsync } from "../../store/slices/productSlice";


const Home = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(state => state.filter);
  const { products, loading, error, url } = useAppSelector(
    (state) => state.product
  );

  const handleClick = () => {
    dispatch(setIsOpen());
  }
  
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [url]);

  return (
    <Container>
      <MobilMenu/>
      <HomeRow>
        <Left isOpen={isOpen}>
          {isOpen && <FilterCancel ><BsXLg onClick={handleClick}/></FilterCancel>}
          <FilterList/>
        </Left>
        <Right>
            <ProductList products={products} loading={loading} error={error}/>
        </Right>
      </HomeRow>
    </Container>
  );
};

export default Home;
