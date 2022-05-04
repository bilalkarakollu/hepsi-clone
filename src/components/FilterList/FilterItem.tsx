import React from "react";
import {
  BoxContainer,
  BoxContainerItem,
  CheckboxInput,
  CheckboxText
} from "../../styled/Filter.styled";
const FilterItem = () => {
  return (
    <BoxContainer>
      <BoxContainerItem>
        <CheckboxInput type={"checkbox"} />
        <CheckboxText>Samsung</CheckboxText>
      </BoxContainerItem>
    </BoxContainer>
  );
};

export default FilterItem;
