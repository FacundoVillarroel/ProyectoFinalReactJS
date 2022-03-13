import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Offers from './components/Offers';
import ItemListContainer from './components/ItemListContainer';

const styles = {
  title: {
    color: "green",
  }
}
const saludo = {
  greeting: "Bienvenido/a a la tienda de Recreativo",
  estilo:{
    color:"red",
  }
}

function App() {
  
  return (
    <div>
      <header className="container"> 
        <div > <NavBar /> </div>
        <ItemListContainer
        greeting = {saludo.greeting} 
        estilo = {saludo.estilo}/>

        <div style={styles.title}> < Offers /> </div>
      </header>
    </div>
  );
}

export default App;
