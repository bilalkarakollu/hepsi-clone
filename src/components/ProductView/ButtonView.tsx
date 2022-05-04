import React, {useState} from "react";
import {
    ButtonsInputContainer,
    ProductAdetButton,
    ProductAdetButtons,
    ProductAdetInput,
    ProductButtons,
    ProductSepeteEkleButton,
  } from "../../styled/ProductDetay.styled";
  import { MdShoppingCart } from "react-icons/md";
  import { ProductType } from "../../types/product";
import { useAppDispatch } from "../../store/hooks";
import { setSepetProductController } from "../../store/slices/sepetSlice";

interface IProps {
  product: ProductType
}

const ButtonView = (props:IProps) => {
  const dispatch = useAppDispatch();
  const { product } = props;
  
  const [adet, setAdet] = useState(1);
  
  const handleAdetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdet(Number(e.target.value));
  }

  const handleClickEksi = () => setAdet(prev => prev-1);
  const handleClickArtı = () => setAdet(prev => prev+1);
  const handleSepeteEkle = () => dispatch(setSepetProductController(product, adet, true));
  
  return (
    <ProductButtons>
      <ProductAdetButtons>
        <ProductAdetButton onClick={handleClickEksi}>-</ProductAdetButton>
        <ButtonsInputContainer>
          <ProductAdetInput onChange={handleAdetChange} type="text" value={adet} />
          <span>Adet</span>
        </ButtonsInputContainer>
        <ProductAdetButton onClick={handleClickArtı}>+</ProductAdetButton>
      </ProductAdetButtons>
      <div>
        <ProductSepeteEkleButton onClick={handleSepeteEkle}>
          <MdShoppingCart /> Sepete Ekle
        </ProductSepeteEkleButton>
      </div>
    </ProductButtons>
  );
};

export default ButtonView;
