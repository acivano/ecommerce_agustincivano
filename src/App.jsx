import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilo.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import CartContextProvider from './context/CartContext';

function App() {
  let saludo = 'Encontrá el medicamento'
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer titulo={saludo}/>}/>  
          <Route  path="/cart" element={<Cart titulo={saludo}/>}/>  

          <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<Navigate to='/'/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
