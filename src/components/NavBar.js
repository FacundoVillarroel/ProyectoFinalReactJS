import {Navbar,Container,Nav} from "react-bootstrap"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <Navbar bg="NavBar" variant="light" sticky="top" expand="lg" collapseOnSelect className="navBar">
            <Container>
            <Link to="/" className="activePage">
                <Navbar.Brand href="#home">Tienda De Recreativo</Navbar.Brand>
            </Link>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                    <Link to="/category/titular">
                        <Nav.Link href="#category/titular">Conjuntos Titulares</Nav.Link>
                    </Link>
                    <Link to="/category/suplente">
                        <Nav.Link href="#category/suplente">Conjuntos Suplentes</Nav.Link>
                    </Link>
                    <Link to="/category/deVestir">
                        <Nav.Link href="#category/deVestir">Ropa de vestir</Nav.Link>
                    </Link>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar


