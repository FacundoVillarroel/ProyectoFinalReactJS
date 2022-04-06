import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom"
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import PlayersContainer from './components/playersContainer';
import './App.css';
import HomeContainer from './components/HomeContainer';





function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="body container-fluid">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/tienda" element={<ItemListContainer/>} />
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path='/cart' element= {<Cart/>} />
            <Route path='/jugadores' element={<PlayersContainer/>}/>
            <Route path="*" element={ <Navigate to="/tienda"/>}/> 
          </Routes>
          
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
    
    
  );
}

export default App;
