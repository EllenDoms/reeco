// A mock function to mimic making an async request for data
import data from './data.json';
import { IProductOrder } from './orderStore';

export function fetchOrderAPI() {
  return new Promise<{ data: IProductOrder[] }>((resolve) =>
    setTimeout(() => resolve({ data: data.order }), 500),
  );
}
