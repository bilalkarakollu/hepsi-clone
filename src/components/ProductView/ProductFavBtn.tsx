import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AddItemBtn } from "../../styled/ProductDetay.styled";
import { ProductType } from "../../types/product";
import { useAppDispatch } from "../../store/hooks";
import { setFavoriProductController } from "../../store/slices/favoriSlice";

interface IProps {
    product: ProductType;
}

const ProductFavBtn = (props:IProps) => {
    const dispatch = useAppDispatch();
    const { product } = props;
    const [isFav, setIsFav] = useState(false);

    const favEkle = () => {
        setIsFav(!isFav);
        dispatch(setFavoriProductController(product, isFav));
      };
    
  return (
    <AddItemBtn onClick={favEkle}>
      {isFav ? <BsHeartFill /> : <BsHeart />} Beğen
    </AddItemBtn>
  );
};

export default ProductFavBtn;
