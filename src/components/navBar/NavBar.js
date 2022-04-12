import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap"
import CartWidget from "../tienda/CartWidget";
import { Link } from "react-router-dom"
import { useState,useContext } from "react";
import {CartContext} from "../../context/CartContext"

function NavBar() {
    const {cartQuantity} = useContext(CartContext)

const [activeHome,setActiveHome] = useState(true)
const [activeFixture,setActiveFixture] = useState(false)
const [activeGoles,setActiveGoles] = useState(false)
const [activeJugadores,setActiveJugadores] = useState(false)
const [activeNosotros,setActiveNosotros] = useState(false)
const [activeTienda,setActiveTienda] = useState(false)

    function handleClickHome(){
        setActiveHome(true); 
        setActiveFixture(false); setActiveGoles(false); setActiveJugadores(false); setActiveNosotros(false); setActiveTienda(false)
    }
    function handleClickFixture() {
        setActiveFixture(true)
        setActiveHome(false); setActiveGoles(false); setActiveJugadores(false); setActiveNosotros(false); setActiveTienda(false)
    }
    function handleClickGoles(){
        setActiveGoles(true)
        setActiveFixture(false); setActiveHome(false); setActiveJugadores(false); setActiveNosotros(false); setActiveTienda(false)
    }
    function handleClickJugadores(){
        setActiveJugadores(true)
        setActiveFixture(false); setActiveGoles(false); setActiveHome(false); setActiveNosotros(false); setActiveTienda(false)
    }
    function handleClickNosotros(){
        setActiveNosotros(true)
        setActiveFixture(false); setActiveGoles(false); setActiveJugadores(false); setActiveHome(false); setActiveTienda(false)
    }
    function handleClickTienda(){
        setActiveTienda(true)
        setActiveFixture(false); setActiveGoles(false); setActiveJugadores(false); setActiveNosotros(false); setActiveHome(false)
    }

    return (
        <Navbar bg="NavBar" variant="light" sticky="top" expand="lg" collapseOnSelect className="navBar">
            <Container>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to ="/" onClick={handleClickHome} active={activeHome} >Home</Nav.Link>
                        <Nav.Link as={Link} to ="/fixture" onClick={handleClickFixture} active={activeFixture} >Fixture</Nav.Link>
                        <Nav.Link as={Link} to ="/goles" onClick={handleClickGoles} active={activeGoles}>Goles</Nav.Link>
                        <Nav.Link as={Link} to ="/jugadores" onClick={handleClickJugadores} active={activeJugadores}>Jugadores</Nav.Link>
                        <Nav.Link as={Link} to ="/nosotros" onClick={handleClickNosotros} active={activeNosotros}>Sobre Nosotros</Nav.Link>
                        <Nav.Link as={Link} to ="/tienda" onClick={handleClickTienda} active={activeTienda}>Tienda</Nav.Link>
                        <NavDropdown title="Categorias" >                            
                            <NavDropdown.Item as={Link} to="/category/titular" onClick={handleClickTienda}>Conjuntos Titulares</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/suplente" onClick={handleClickTienda}>Conjuntos Suplentes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/deVestir" onClick={handleClickTienda}>Ropa de vestir</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/pelota" onClick={handleClickTienda}>Pelotas</NavDropdown.Item>
                        </NavDropdown>
                        
                        {cartQuantity() !== 0 && <Link to="/cart"> <CartWidget/> </Link>}

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar

