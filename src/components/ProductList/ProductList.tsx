import React from "react";
import { ProductRow } from "../../styled/Product.styled";
import Product from "./Product";
import { ProductType } from "../../types/product";
interface IProps {
  products: ProductType[];
  loading: boolean;
  error: string;
}

const ProductList = (props:IProps) => {

  const { products, loading, error } = props;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>Ürün Bulunamadı.</p>;
  }

  return (
    <ProductRow>
      {products.map((product) => (
        <Product key={Number(product.id)} product={product} />
      ))}
    </ProductRow>
  );
};

export default React.memo(ProductList);
