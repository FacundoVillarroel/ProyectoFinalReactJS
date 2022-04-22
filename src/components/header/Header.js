import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header d-flex justify-content-center align-items-center pt-3 pb-3">
            <Link to={"/"}>
                <img src={"https://firebasestorage.googleapis.com/v0/b/projectofinalreactjs.appspot.com/o/logo.png?alt=media&token=819a6d36-aa26-40e9-9cfc-c315a8088b35"} className="logo" alt="Logo de Recreativo"/>
            </Link>
            <h1 className="titulo ms-4">
            Recreativo F.C.
            </h1>
        </header>
    )
}
export default Header;