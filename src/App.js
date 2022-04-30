import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components//navBar/NavBar";
import Header from './components/header/Header';
import ItemListContainer from './components/tienda/ItemListContainer';
import ItemDetailContainer from './components/tienda/ItemDetailContainer';
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom"
import Footer from './components/footer/Footer';
import Cart from './components/tienda/Cart';
import { CartProvider } from './context/CartContext';
import PlayersContainer from './components/jugadores/playersContainer';
import HomeContainer from './components//home/HomeContainer';
import FixtureContainer from './components/fixture/FixtureContainer';
import GolesContainer from './components/goles/GolesContainer';
import NosotrosContainer from './components/nosotros/NosotrosContainer';
import CheckOut from './components/tienda/CheckOut';
import './App.css';
import OrderContainer from './components/tienda/OrderContainer';






function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="body container-fluid">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/fixture" element={<FixtureContainer/>}/>
            <Route path="/goles" element={<GolesContainer/>}/>
            <Route path='/jugadores' element={<PlayersContainer/>}/>
            <Route path='/nosotros' element={<NosotrosContainer/>}/>
            <Route path="/tienda" element={<ItemListContainer/>} />
            <Route path="/tienda/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/checkout" element={<CheckOut/>} />
            <Route path="/cart" element= {<Cart/>} />
            <Route path="/order/:orderId" element={<OrderContainer/>}/>
            <Route path="*" element={ <Navigate to="/tienda"/>}/> 
          </Routes>
          
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
    
    
  );
}

export default App;
