import React from "react";
import SepetArea from "../../components/SepetArea";
import { Container } from "../../styled/Global";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BosSepet } from "../../styled/Sepet.styled";
import { useAppSelector } from "../../store/hooks";

const Sepet = () => {

  const { urunAdet } = useAppSelector((state) => state.sepet);

  return (
    <>
      {urunAdet === 0 && (
        <BosSepet>
          <MdOutlineShoppingCart />
          <div>Sepetin şu an boş</div>
        </BosSepet>
      )}
      <Container>
        <SepetArea />
      </Container>
    </>
  );
};

export default Sepet;
