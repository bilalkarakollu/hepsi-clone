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
  FilterContainer
} from "../../styled/Filter.styled";
import { IoSearchOutline } from "react-icons/io5";
import FilterItem from "./FilterItem";

interface FilterProps {
  title: string;
  items?: string[];
  onChange?: (value: string) => void;
}

const Filter = (props:FilterProps) => {

  const { title, items, onChange } = props;

  const [filter, setFilter] = React.useState("");
  
  return (
    <FilterContainer>
      <TitleContainer>
        <Title>{title}</Title>
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
    </FilterContainer>
  );
};

export default Filter;
