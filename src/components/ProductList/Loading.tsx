import React from "react";
import Placeholder from "./Placeholder";
import { ProductRow } from "../../styled/Product.styled";
const Loading = () => {
  return (
    <ProductRow>
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </ProductRow>
  );
};

export default Loading;
