import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import Routers from './Component/Routers';
const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  )
}

export default App
