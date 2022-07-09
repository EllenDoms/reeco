// A mock function to mimic making an async request for data
import data from './data.json';
import { IOrder } from './orderStore';

export function fetchOrderAPI(orderId: string) {
  return new Promise<{ data: IOrder }>((resolve) =>
    setTimeout(() => {
      const order = data.orders.find((order) => order.id === orderId);

      order && resolve({ data: order });
    }, 500),
  );
}
