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
  FilterContainer,
} from "../../styled/Filter.styled";
import { IoSearchOutline } from "react-icons/io5";
import FilterItem from "./FilterItem";
import { FilterType } from "../../types/filters";

interface FilterProps {
  title: string;
  filters: FilterType[];
}

const Filter = (props: FilterProps) => {
  const { title, filters } = props;

  const [filterInput, setFilterInput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

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
          <FilterInput type={"text"} placeholder="Filtrele" onChange={handleChange}/>
        </InputContainer>

        <CheckboxContainer>

          {filters.filter((filter) => filter.category.toLowerCase().includes(filterInput.toLowerCase())).map((filter) => {
            return <FilterItem key={Number(filter.id)} filter={filter} />
          })}

          <CheckboxContainerShadow />
        </CheckboxContainer>
      </Body>
    </FilterContainer>
  );
};

export default React.memo(Filter);
