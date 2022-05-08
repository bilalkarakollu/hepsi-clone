import React from "react";
import {
  ProductOzellikTable,
  ProductOzellikTitle,
  Row,
} from "../../styled/ProductDetay.styled";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import { ProductType } from "../../types/product";
import Loading from "./Loading";

interface IProps { 
  isLoading: boolean;
  product: ProductType;
  error: string;
}

const ProductView = (props:IProps) => {
  
  const { isLoading, product, error } = props;
  
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

export default React.memo(ProductView);
