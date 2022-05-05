import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFiltersAsync } from "../../store/slices/filterSlice";
import Filter from "./Filter";
import Loading from "./Loading";

const FilterList = () => {
  const dispatch = useAppDispatch();
  const { filters, loading, error } = useAppSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchFiltersAsync());
    }, [dispatch]);
  
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <Filter title="Kategoriler" filters={filters} />;
};

export default React.memo(FilterList);
