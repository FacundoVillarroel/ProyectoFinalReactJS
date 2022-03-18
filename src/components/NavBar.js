import CartWidget from "./CartWidget";


function NavBar() {
    return (
        <nav className="navBar pt-1 pb-1 mb-5">
                <div className="d-flex align-items-center justify-content-evenly">
                    <a href="#">Home</a>
                    <a href="#" className="activePage">Tienda De Recreativo</a>
                    <a href="#">Login</a>
                    <CartWidget/>
                </div>
        </nav>
    )
}

export default NavBar


