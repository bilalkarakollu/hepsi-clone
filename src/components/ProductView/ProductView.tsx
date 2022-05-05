import React, { useState, useEffect } from "react";
import {
  ProductOzellikTable,
  ProductOzellikTitle,
  Row,
} from "../../styled/ProductDetay.styled";
import axios from "axios";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import { ProductType } from "../../types/product";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const emptyProduct: ProductType = {
  id: "",
  title: "",
  price: "",
  description: "",
  category: "",
};

const ProductView = () => {
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

  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Row>
        <ProductLeft />
        <ProductRight product={product} />
      </Row>
      <div>
        <ProductOzellikTitle>
          <h2>{product.title}</h2>
        </ProductOzellikTitle>
        <div>
          <ProductOzellikTable>
            <tbody>
              <tr>
                <td>Bellek Hızı </td>
                <td>Belirtilmemiş</td>
              </tr>
              <tr>
                <td>Bluetooth Özelliği </td>
                <td>Var</td>
              </tr>
              <tr>
                <td>Cihaz Ağırlığı </td>
                <td>1 - 2 kg</td>
              </tr>
              <tr>
                <td>Ekran Panel Tipi </td>
                <td>IPS</td>
              </tr>
              <tr>
                <td>Klavye</td>
                <td>Q Türkçe</td>
              </tr>
              <tr>
                <td>Max Ekran Çözünürlüğü </td>
                <td>2560 x 1600</td>
              </tr>
              <tr>
                <td>Bellek Hızı </td>
                <td>Belirtilmemiş</td>
              </tr>
              <tr>
                <td>Bluetooth Özelliği </td>
                <td>Var</td>
              </tr>
              <tr>
                <td>Cihaz Ağırlığı </td>
                <td>1 - 2 kg</td>
              </tr>
              <tr>
                <td>Ekran Panel Tipi </td>
                <td>IPS</td>
              </tr>
              <tr>
                <td>Klavye</td>
                <td>Q Türkçe</td>
              </tr>
              <tr>
                <td>Max Ekran Çözünürlüğü </td>
                <td>2560 x 1600</td>
              </tr>
            </tbody>
          </ProductOzellikTable>
        </div>
      </div>
    </>
  );
};

export default ProductView;
