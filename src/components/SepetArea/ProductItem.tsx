import React from "react";
import {
  ProductAdet,
  ProductButton,
  ProductButtons,
  ProductImage,
  ProductImageContainer,
  ProductKargoTitle,
  ProductListItem,
  ProductPrice,
  ProductTitle,
} from "../../styled/Sepet.styled";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { ProductSepetType } from "../../types/product";
import { useAppDispatch } from "../../store/hooks";
import {
  removeProduct,
  setSepetProductController,
} from "../../store/slices/sepetSlice";
import { Link } from "react-router-dom";

interface IProps {
  product: ProductSepetType;
}

const ProductItem = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { product } = props;

  const handleDelete = () => {
    dispatch(removeProduct(product));
  };

  const handleAdd = () => {
    dispatch(setSepetProductController(product, 1, false));
  };

  return (
    <ProductListItem>
      <ProductImageContainer>
        <ProductImage src="https://productimages.hepsiburada.net/s/49/250/10983949860914.jpg" />
      </ProductImageContainer>
      <div>
        <ProductTitle>
          <Link to={`/${product.id}`}>{product.title}</Link>
        </ProductTitle>
        <ProductKargoTitle>En geç Perşembe günü kargoda</ProductKargoTitle>
        <ProductPrice>
          <span>{Number(product.price) * Number(product.piece)}</span> TL
        </ProductPrice>
      </div>
      <ProductButtons>
        <ProductButton onClick={handleAdd}>
          <BsPlusLg />
        </ProductButton>
        <ProductAdet>{product.piece}</ProductAdet>
        <ProductButton onClick={handleDelete}>
          <BsTrash />
        </ProductButton>
      </ProductButtons>
    </ProductListItem>
  );
};

export default ProductItem;
