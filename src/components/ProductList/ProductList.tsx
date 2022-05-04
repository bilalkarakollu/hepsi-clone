import React, { useEffect } from "react";
import { ProductRow } from "../../styled/Product.styled";
import Product from "./Product";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProductsAsync } from "../../store/slices/productSlice";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, url } = useAppSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!products) {
    return <p>No products</p>;
  }

  return (
    <ProductRow>
      {products.map((product) => (
        <Product key={Number(product.id)} product={product} />
      ))}
    </ProductRow>
  );
};

export default ProductList;
