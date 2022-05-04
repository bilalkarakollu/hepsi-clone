import { ProductType } from "../../types/product";
import { AppThunk } from "..";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductState {
  products: ProductType[];
  loading: boolean;
  error: string;
  url: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
  url: "https://computer-app-server.herokuapp.com/products",
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async (value, { getState }) => {
    try {
      const {product} = getState() as { product: ProductState };
      const { data } = await axios.get(
        product.url
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductUrl(state, action) {
      state.url = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching products";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const { setProductUrl } = productSlice.actions;

export const setProductParamOdd =
  (param:string, category: string, type:boolean): AppThunk =>
  (dispatch, getState) => {
    const {product} = getState() as { product: ProductState };

    const newURL = new URL(product.url);
    
    if(type){
      const urlChange = new URL(product.url);
      newURL.searchParams.delete(param);
      urlChange.searchParams.forEach((value, key) => value !== category && newURL.searchParams.append(key, value));
    }else{
      newURL.searchParams.append(param, category);
    }
    console.log(newURL.searchParams.getAll(param));
    dispatch(setProductUrl(newURL));
  };

export default productSlice.reducer;
