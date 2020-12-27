import React from 'react'
import './App.less';
import ThemColorContex from './context/ThemColorContex';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <ThemColorContex>
      <AppLayout />
    </ThemColorContex>
  )
}

export default App
