import React from 'react';
import { Header } from './components/header/Header';
import { Order } from './modules/orders/Order';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Order />
    </div>
  );
}

export default App;
