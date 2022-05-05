import React from "react";
import { BsHeartFill } from "react-icons/bs";
import {
  Badge,
  BadgeContainer,
  BtnText,
  BtnWhite,
} from "../../styled/Navbar.styled";
import { useAppSelector } from "../../store/hooks";

const FavBtn = () => {
  const { urunAdet } = useAppSelector((state) => state.favori);

  return (
    <BtnWhite>
      <BadgeContainer>
        <BsHeartFill />
        {urunAdet > 0 && <Badge>{urunAdet}</Badge>}
      </BadgeContainer>
      <BtnText>Favoriler</BtnText>
    </BtnWhite>
  );
};

export default FavBtn;
