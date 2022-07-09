import React, { useMemo } from 'react';
import {
  FastfoodOutlined,
  KebabDiningOutlined,
  CakeOutlined,
  AcUnitOutlined,
  CookieOutlined,
  LiquorOutlined,
} from '@mui/icons-material';
import { IOrder } from '../../redux/orderStore';

interface Props {
  order?: IOrder;
}

export function OrderBanner({ order }: Props) {
  const total = useMemo(() => {
    let totalAmount = 0;
    order?.products.map((product) => (totalAmount += product.price * product.quantity));
    return totalAmount;
  }, [order?.products]);

  return (
    <div className="border border-gray-200 rounded-md bg-white flex flex-row justify-between p-6 divide-x ">
      <BannerTextItem label="Supplier" text={order?.supplier} />
      <BannerTextItem label="Shipping date" text={order?.shipping} />
      <BannerTextItem
        label="Total"
        text={total.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      />
      <div className="w-full px-4">
        <p className="text-gray-500 text-sm font-semibold leading-8">Category</p>
        <p className="text-base grid grid-cols-4 gap-2">
          <LiquorOutlined fontSize="small" className="text-gray-500" />
          <FastfoodOutlined fontSize="small" className="text-gray-500" />
          <AcUnitOutlined fontSize="small" className="text-gray-500" />
          <KebabDiningOutlined fontSize="small" className="text-gray-500" />
          <CookieOutlined fontSize="small" className="text-gray-500" />
          <CakeOutlined fontSize="small" className="text-gray-500" />
        </p>
      </div>
      <BannerTextItem label="Department" text={order?.department} />
      <BannerTextItem label="Status" text={order?.status} />
    </div>
  );
}

interface ItemProps {
  label: string;
  text?: string;
}

function BannerTextItem({ label, text }: ItemProps) {
  return (
    <div className="w-full px-4">
      <p className="text-gray-500 text-sm font-semibold leading-8">{label}</p>
      <p className="text-base font-semibold">{text}</p>
    </div>
  );
}
