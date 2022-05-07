import React from "react";
import { BsHeartFill } from "react-icons/bs";
import {
  Badge,
  BadgeContainer,
  BtnText,
  BtnWhite,
} from "../../styled/Navbar.styled";
import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";

const FavBtn = () => {
  const { urunAdet } = useAppSelector((state) => state.favori);

  return (
    <Link to={'/favoriler'}>
      <BtnWhite data-testid="fav-btn">
        <BadgeContainer>
          <BsHeartFill />
          {urunAdet > 0 && <Badge>{urunAdet}</Badge>}
        </BadgeContainer>
        <BtnText>Favoriler</BtnText>
      </BtnWhite>
    </Link>
  );
};

export default FavBtn;
