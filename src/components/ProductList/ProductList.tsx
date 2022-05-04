import React, { useEffect } from "react";
import { ProductRow } from "../../styled/Product.styled";
import Product from "./Product";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProductsAsync } from "../../store/slices/productSlice";

const ProductList = () => {

    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector(state => state.product);
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

    if (error) {
        return <p>{error}</p>;
    }

  return (
    <ProductRow>
      {products.map(product => (
          <Product key={product.id}/>
        ))}
    </ProductRow>
  );
};

export default ProductList;
