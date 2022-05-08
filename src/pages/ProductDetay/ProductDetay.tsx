import React, { useEffect, useState } from "react";
import { Container } from "../../styled/Global";
import ProductView from "../../components/ProductView";
import { ProductType } from "../../types/product";
import { useParams } from "react-router-dom";
import axios from "axios";

const emptyProduct: ProductType = {
  id: "",
  title: "",
  price: "",
  description: "",
  category: "",
};

const ProductDetay = () => {

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>(emptyProduct);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://computer-app-server.herokuapp.com/products/${id}`
      );
      setProduct(data);
      setIsLoading(false);
    } catch {
      setError("Ürün getirilirken bir hata oluştu.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, []);

  
  
  return (
    <Container>
      <ProductView product={product} error={error} isLoading={isLoading}/>
    </Container>
  );
};

export default ProductDetay;
