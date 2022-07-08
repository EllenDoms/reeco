import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Iproducts } from './productStore';
import { ProductStatus } from '../types/product';
import { fetchOrderAPI } from './ordersAPI';
import { RootState } from './store';

export interface IProductOrder extends Iproducts {
  quantity: number;
  status: string; // should be ProductStatus
}

export interface OrderState {
  loading: boolean;
  order?: IProductOrder[];
  error?: string;
}

const initialState: OrderState = {
  loading: false,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetchOrderAPI();
  return response.data;
});

export const orderssSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.error = undefined;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.order = undefined;
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const selectOrders = (state: RootState) => state.orderStore;

// Action creators are generated for each case reducer function
export const {} = orderssSlice.actions;

export default orderssSlice.reducer;
