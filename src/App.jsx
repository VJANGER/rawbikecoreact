import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {NavBar} from './Components/NavBar/NavBar'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'
import {ItemDetailConatiner} from './Components/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Components/Checkout/Checkout';

export const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/product/:id' element={<ItemDetailConatiner/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

