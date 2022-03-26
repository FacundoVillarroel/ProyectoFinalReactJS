import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav className="navBar pt-1 pb-1 mb-5">
                <div className="d-flex align-items-center justify-content-evenly">
                    <Link to="/"> Home </Link>
                    <Link to="/" className="activePage"> Tienda De Recreativo </Link>
                    <Link to="/category/titular"> Conjuntos Titulares </Link>
                    <Link to="/category/suplente"> Conjuntos Suplentes </Link>
                    <Link to="/category/deVestir"> Ropa de vestir </Link>
                    <a href="#">Login</a>
                    <CartWidget/>
                </div>
        </nav>
    )
}

export default NavBar


