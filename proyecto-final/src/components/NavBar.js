import logoRecrea from "../images/logo.png";
import CartWidget from "./cartWidget";

const estilo = {
    a:{
        textDecoration: "none",
        color: "black",
    },
    bar:{
        width:800,
    }
}

function NavBar() {
    return (
        <nav>
            <div className="d-flex justify-content-between mt-3">
                <img src={logoRecrea} alt="Logo Recreativo" />
                <div className="d-flex align-items-center justify-content-around" style={estilo.bar} >
                    <a href="#" style={estilo.a}>Home</a>
                    <a href="#" style={estilo.a}>Tienda De Recreativo</a>
                    <a href="#" style={estilo.a}>Login</a>
                    <CartWidget/>
                </div>
                
            </div>
            
        </nav>
    )
}

export default NavBar


