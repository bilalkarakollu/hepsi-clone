import React from "react";
import { MdShoppingCart } from "react-icons/md";
import {
  Badge,
  BadgeContainer,
  BtnGrey,
  BtnText,
} from "../../styled/Navbar.styled";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const SepetBtn = () => {

    const {urunAdet} = useAppSelector(state => state.sepet);
    
  return (
    <Link to={"/sepet"}>
      <BtnGrey>
        <BadgeContainer>
          <MdShoppingCart />
          {urunAdet > 0 && <Badge>{urunAdet}</Badge>}
        </BadgeContainer>
        <BtnText>Sepet</BtnText>
      </BtnGrey>
    </Link>
  );
};

export default SepetBtn;
