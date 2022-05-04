import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        product: productSlice,
        filter: filterSlice
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