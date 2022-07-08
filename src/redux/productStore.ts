import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductStatus } from '../types/product';

export interface Iproducts {
  title: string;
  brand: string;
  price: number;
}

const initialState: Iproducts[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
