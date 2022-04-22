import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap"
import CartWidget from "../tienda/CartWidget";
import { Link } from "react-router-dom"
import { useState,useContext } from "react";
import {CartContext} from "../../context/CartContext"

const NavBar = () => {
    const {cartQuantity} = useContext(CartContext)

    const [activePage,setActivePage] = useState({
        home:false,
        fixture:false,
        goles:false,
        jugadores:false,
        nosotros:false,
        tienda:false
    })

    const handleClickLink = (e) => {
    setActivePage({
        home:false,
        fixture:false,
        goles:false,
        jugadores:false,
        nosotros:false,
        tienda:false,
        [e.target.id]:true
    })
}

    return (
        <Navbar bg="NavBar" variant="light" sticky="top" expand="lg" collapseOnSelect className="navBar">
            <Container>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to ="/" onClick={handleClickLink} active={activePage.home} id="home" >Home</Nav.Link>
                        <Nav.Link as={Link} to ="/fixture" onClick={handleClickLink} active={activePage.fixture} id="fixture" >Fixture</Nav.Link>
                        <Nav.Link as={Link} to ="/goles" onClick={handleClickLink} active={activePage.goles} id="goles">Goles</Nav.Link>
                        <Nav.Link as={Link} to ="/jugadores" onClick={handleClickLink} active={activePage.jugadores} id="jugadores">Jugadores</Nav.Link>
                        <Nav.Link as={Link} to ="/nosotros" onClick={handleClickLink} active={activePage.nosotros} id="nosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link as={Link} to ="/tienda" onClick={handleClickLink} active={activePage.tienda} id="tienda">Tienda</Nav.Link>
                        <NavDropdown title="Categorias" >                            
                            <NavDropdown.Item as={Link} to="/category/titular" onClick={handleClickLink}id="tienda">Conjuntos Titulares</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/suplente" onClick={handleClickLink}id="tienda">Conjuntos Suplentes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/deVestir" onClick={handleClickLink}id="tienda">Ropa de vestir</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/pelota" onClick={handleClickLink}id="tienda">Pelotas</NavDropdown.Item>
                        </NavDropdown>
                        
                        {cartQuantity() !== 0 && <Link to="/cart"> <CartWidget/> </Link>}

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar

