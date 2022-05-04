import React, {useState} from "react";
import {
  BoxContainer,
  BoxContainerItem,
  CheckboxInput,
  CheckboxText,
} from "../../styled/Filter.styled";
import { FilterType } from "../../types/filters";
import { useAppDispatch } from "../../store/hooks";
import { setProductParamOdd } from "../../store/slices/productSlice";

interface FilterProps {
  filter: FilterType;
}

const FilterItem = (props: FilterProps) => {
  const { filter } = props;
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    dispatch(setProductParamOdd("category", filter.category, isChecked));
    setIsChecked(!isChecked);
  };

  return (
    <BoxContainer>
      <BoxContainerItem>
        <CheckboxInput checked={isChecked} type={"checkbox"} onChange={handleChange} />
        <CheckboxText>{filter.category}</CheckboxText>
      </BoxContainerItem>
    </BoxContainer>
  );
};

export default FilterItem;
