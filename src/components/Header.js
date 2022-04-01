import logo from "../images/logo.png"
import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="header d-flex justify-content-center align-items-center pt-3 pb-3">
            <Link to={"/"}><img src={logo} className="logo" alt="Logo de Recreativo"/></Link>
            <h1 className="titulo ms-4">
            Recreativo F.C.
            </h1>
        </header>
    )
}
export default Header;