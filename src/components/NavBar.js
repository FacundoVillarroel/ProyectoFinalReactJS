import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <Navbar bg="NavBar" variant="light" sticky="top" expand="lg" collapseOnSelect className="navBar">
            <Container>
                <Navbar.Brand as={Link} to="/">Tienda De Recreativo</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias">                            
                            <NavDropdown.Item as={Link} to="/category/titular">Conjuntos Titulares</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/suplente">Conjuntos Suplentes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/deVestir">Ropa de vestir</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/pelota">Pelotas</NavDropdown.Item>
                        </NavDropdown>
                        
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar

