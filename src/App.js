import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Main from './components/Main';
import './App.css';



function App() {
  
  return (
    <div className="body container-fluid">
        <Header />
        <NavBar />
        <Main />
    </div>
  );
}

export default App;
