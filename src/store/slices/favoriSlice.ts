import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/product";
import { AppThunk } from "..";

interface FavoriState {
  products: ProductType[];
  loading: boolean;
  error: string;
  urunAdet: number;
}

const initialState: FavoriState = {
  products: [],
  loading: false,
  error: "",
  urunAdet: 0,
};

export const favoriSlice = createSlice({
  name: "favori",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setProduct, removeProduct } = favoriSlice.actions;
export default favoriSlice.reducer;

export const setFavoriProductController =
  (product: ProductType, isFav: boolean): AppThunk =>
  (dispatch, getState) => {
    const { products } = getState().favori;

    if (isFav) {
      dispatch(removeProduct(product.id));
      toast.error("Ürün favori listenizden çıkarıldı.");
    } else {
      if (products.find((item) => item.id === product.id)) {
        toast.warn("Bu ürün zaten favori listenizde var.");
      } else {
        dispatch(setProduct(product));
        toast.success(`Ürün favori listesine eklendi.`);
      }
    }
  };
