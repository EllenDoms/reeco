import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchOrderAPI } from './ordersAPI';
import { RootState } from './store';

export interface IProducts {
  title: string;
  brand: string;
  price: number;
}

export interface IProductOrder extends IProducts {
  quantity: number;
  // I am not sure how you store status of the products in an order
  // (missing - missing with urgency - ...)
  // So for the exercise I put it in one value being 'status'
  status: string;
}

export interface IOrder {
  id: string;
  supplier: string;
  shipping: string;
  department: string;
  status: string;
  products: IProductOrder[];
}

export interface OrderState {
  loading: boolean;
  order?: IOrder;
  error?: string;
}

const initialState: OrderState = {
  loading: false,
};

export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string) => {
  const response = await fetchOrderAPI(orderId);
  return response.data;
});

export const orderssSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.error = undefined;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.order = undefined;
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const selectOrderById = (state: RootState) => state.orderStore;

// Action creators are generated for each case reducer function
export const {} = orderssSlice.actions;

export default orderssSlice.reducer;
