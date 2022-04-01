import {Navbar,Container,Nav} from "react-bootstrap"
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
                        <Nav.Link as={Link} to="/category/titular">Conjuntos Titulares</Nav.Link>
                        <Nav.Link as={Link} to="/category/suplente">Conjuntos Suplentes</Nav.Link>
                        <Nav.Link as={Link} to="/category/deVestir">Ropa de vestir</Nav.Link>
                        <Nav.Link as={Link} to="/category/pelota">Pelotas</Nav.Link>
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

