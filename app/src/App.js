import React from 'react'
import './App.less';
import AuthContext from './context/AuthContext';
import CartContext from './context/CartContex';
import ThemColorContex from './context/ThemColorContex';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <AuthContext>
      <ThemColorContex>
        <CartContext>
          <AppLayout />
        </CartContext>
      </ThemColorContex>
    </AuthContext>
  )
}

export default App
