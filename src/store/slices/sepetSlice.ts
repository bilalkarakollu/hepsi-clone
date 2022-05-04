import { ProductSepetType, ProductType } from "../../types/product";
import { AppThunk } from "..";
import {toast} from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: ProductSepetType[];
  loading: boolean;
  error: string;
  urunAdet: number;
  totalPrice: number;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
  totalPrice: 0,
  urunAdet: 0,
};

export const sepetSlice = createSlice({
  name: "sepet",
  initialState,
  reducers: {
    setProduct(state, action) {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.piece += action.payload.adet;
      } else {
        state.products.push({ ...action.payload.product, piece: action.payload.adet });
      }
      state.totalPrice += Number(action.payload.product.price) * action.payload.adet;
      state.urunAdet += action.payload.adet;
    },
    removeProduct(state, action) {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.piece === 1) {
          state.products = state.products.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.piece -= 1;
        }
        state.totalPrice -= Number(action.payload.price);
        state.urunAdet -= 1;
      }
    },
  },
});

export const { setProduct, removeProduct } = sepetSlice.actions;

export const setSepetProductController =
  (product: ProductType, adet: number, notification?:boolean): AppThunk =>
  (dispatch) => {

    if (adet > 0) {
      const payload = {
        product,
        adet,
      };
      dispatch(setProduct(payload));
      
      notification && toast.success('Ürün Sepete Eklendi');
    } else {
      toast.warn('Ürün Sepete Eklenemedi')
    }
  };

export default sepetSlice.reducer;
