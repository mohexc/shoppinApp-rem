import React from 'react'
import './App.less';
import CartContext from './context/CartContex';
import ThemColorContex from './context/ThemColorContex';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <ThemColorContex>
      <CartContext>
        <AppLayout />
      </CartContext>
    </ThemColorContex>
  )
}

export default App
