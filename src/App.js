import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom"
import './App.css';



function App() {
  
  return (
    <BrowserRouter>
      <div className="body container-fluid">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          
          <Route path="*" element={ <Navigate to="/"/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
