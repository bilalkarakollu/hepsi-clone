import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import productSlice from './slices/productSlice';
import sepetSlice from './slices/sepetSlice';
import favoriSlice from './slices/favoriSlice';

export const store = configureStore({
    reducer: {
        product: productSlice,
        filter: filterSlice,
        sepet: sepetSlice,
        favori: favoriSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;