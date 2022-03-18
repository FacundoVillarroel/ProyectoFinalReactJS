import logo from "../images/logo.png"

function Header () {
    return (
        <header className="header d-flex justify-content-center align-items-center pt-3 pb-3">
            <img src={logo} className="logo"/>
            <h1 className="titulo ms-4">
            Recreativo F.C.
            </h1>
        </header>
    )
}
export default Header;