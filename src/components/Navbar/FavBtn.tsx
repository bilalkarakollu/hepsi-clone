import React from "react";
import { BsHeartFill } from "react-icons/bs";
import {
  Badge,
  BadgeContainer,
  BtnText,
  BtnWhite
} from "../../styled/Navbar.styled";
const FavBtn = () => {
  return (
    <BtnWhite>
      <BadgeContainer>
        <BsHeartFill />
        {/* <Badge>2</Badge> */}
      </BadgeContainer>
      <BtnText>Favoriler</BtnText>
    </BtnWhite>
  );
};

export default FavBtn;
