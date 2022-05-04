import { FilterType } from "../../types/filters";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FilterState {
  filters: FilterType[];
  loading: boolean;
  error: string;
  url: string;
  isOpen: boolean
}

const initialState: FilterState = {
  filters: [],
  loading: false,
  error: "",
  url: "https://computer-app-server.herokuapp.com/categories",
  isOpen: false
};

export const fetchFiltersAsync = createAsyncThunk(
  "product/fetchFilters",
  async (value, { getState }) => {
    try {
      const { filter } = getState() as { filter: FilterState };
      const { data } = await axios.get(filter.url);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiltersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFiltersAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching filters";
      })
      .addCase(fetchFiltersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.filters = action.payload;
      });
  },
});

export const { setIsOpen } = filterSlice.actions; 

export default filterSlice.reducer;
