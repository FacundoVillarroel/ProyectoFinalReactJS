import { Link } from "react-router-dom"
const CategoryNav = () => {

    return(
        <div className="my-4"> 
            <div className="d-flex align-items-center">
                <h3>Categorias:</h3>
                <button className="categoryButton"><Link to="/tienda" >Todos</Link></button>
                <button className="categoryButton"><Link to="/tienda/category/titular" >Conjuntos Titulares</Link></button>
                <button className="categoryButton"><Link to="/tienda/category/suplente" >Conjuntos Suplentes</Link></button>
                <button className="categoryButton"><Link to="/tienda/category/deVestir" >Ropa de vestir</Link></button>
                <button className="categoryButton"><Link to="/tienda/category/pelota" >Pelotas</Link></button>
            </div>
        </div>
    )
}
export default CategoryNav 