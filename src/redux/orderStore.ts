import { identifier } from '@babel/types';
import {
  createAction,
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ProductStatus } from '../types/product';
import { fetchOrderAPI } from './ordersAPI';
import { RootState } from './store';

export interface IProducts {
  id: string;
  title: string;
  brand: string;
  price: number;
  prevPrice?: number;
}

export interface IProductOrder extends IProducts {
  quantity: number;
  prevQuantity?: number;
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

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order = payload;
        state.error = undefined;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.order = undefined;
        state.error = action.error.message;
      })
      .addCase(setApproved, (state, action) => {
        let updated = state.order?.products.find((product) => product.id === action.payload);
        if (updated) {
          updated.status = ProductStatus.APPROVED;
        }
      })
      .addCase(setMissing, (state, action) => {
        let updated = state.order?.products.find((product) => product.id === action.payload.id);

        if (updated) {
          action.payload.urgent
            ? (updated.status = ProductStatus.MIS_URGENT)
            : (updated.status = ProductStatus.MISSING);
        }
      });
  },
  reducers: {},
});

export const selectOrderById = (state: RootState) => state.orderStore;
export const setApproved = createAction<string>('setApproved');
export const setMissing = createAction<{ id: string; urgent: boolean }>('setMissing');

export default ordersSlice.reducer;
