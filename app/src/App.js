import React from 'react'
import './App.less';
import OrderContext from './context/OrderContext';
import ThemColorContex from './context/ThemColorContex';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <ThemColorContex>
      <OrderContext>
        <AppLayout />
      </OrderContext>
    </ThemColorContex>
  )
}

export default App
