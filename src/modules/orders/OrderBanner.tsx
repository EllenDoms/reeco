import React from 'react';
import {
  FastfoodOutlined,
  KebabDiningOutlined,
  CakeOutlined,
  AcUnitOutlined,
  CookieOutlined,
  LiquorOutlined,
} from '@mui/icons-material';

interface Props {}

export function OrderBanner(props: Props) {
  return (
    <div className="border border-gray-200 rounded-md bg-white flex flex-row justify-between p-6 divide-x ">
      <BannerTextItem label="Supplier" text="East Coast fruits & vegetables" />
      <BannerTextItem label="Shipping date" text="Thu, feb 10" />
      <BannerTextItem label="Total" text="$ 15,028.3" />
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
      <BannerTextItem label="Department" text="300-444-678" />
      <BannerTextItem label="Status" text="Awaiting for approval" />
    </div>
  );
}

interface ItemProps {
  label: string;
  text: string;
}

function BannerTextItem({ label, text }: ItemProps) {
  return (
    <div className="w-full px-4">
      <p className="text-gray-500 text-sm font-semibold leading-8">{label}</p>
      <p className="text-base font-semibold">{text}</p>
    </div>
  );
}
