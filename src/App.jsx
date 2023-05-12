import './App.css';
// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from "../src/Context/DarkModeContext";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Checkout } from "./Components/Checkout/Checkout";
import { Cart } from "./Components/Cart/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { createProducts } from "./Firebase/Firebase.js";
export const App = () => {
  //useEffect(() => {createProducts()},[])
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>

  )
}