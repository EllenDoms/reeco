import React from 'react';
import { Tabs } from './Tabs';
import Logo from '../logo/Logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ExpandMoreOutlined } from '@mui/icons-material';

interface Props {}

export function Header(props: Props) {
  return (
    <div className="w-full flex flex-row justify-between bg-brand py-4 px-14 items-center">
      <div className="flex flex-row gap-12 items-center">
        <img style={{ width: 80 }} alt="logo" src={Logo} />
        <Tabs />
      </div>
      <div className="flex flex-row gap-4">
        <ShoppingCartIcon className="text-white" />
        <div className="text-white flex flex-row items-center">
          <p className="text-sm opacity-80">Hello, James</p> <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}
