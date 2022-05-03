import React from "react";
import {
  Body,
  CheckboxContainer,
  CheckboxContainerShadow,
  FilterInput,
  FilterLabel,
  InputContainer,
  Title,
  TitleContainer,
} from "../../styled/Filter.styled";
import { IoSearchOutline } from "react-icons/io5";
import FilterItem from "./FilterItem";

const Filter = () => {
  return (
    <>
      <TitleContainer>
        <Title>Marka</Title>
      </TitleContainer>
      <Body>
        <InputContainer>
          <FilterLabel>
            <IoSearchOutline />
          </FilterLabel>
          <FilterInput type={"text"} placeholder="Filtrele" />
        </InputContainer>
        <CheckboxContainer>
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />

          <CheckboxContainerShadow />
        </CheckboxContainer>
      </Body>
    </>
  );
};

export default Filter;
