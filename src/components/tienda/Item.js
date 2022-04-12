import { Link } from "react-router-dom"

function Item ({item}){
    return item?(
        <div className= "product d-flex flex-column align-items-center">
            <div className ="productName pt-1 pb-1">
                <p>{item.title}</p>
            </div>
            <div className="productImageContainer d-flex justify-content-center align-items-center mt-4 mb-2">
                <img src={item.imgSrc} alt={item.title} className="productImage" />
            </div>
            <div className="productPrice mt-2">
                <p className="mb-0">Precio: ${item.price}</p>
            </div>
            <Link to={`/item/${item.id}`}><button className="viewDetails">Ver detalles</button></Link>
            <div className="stock mb-0">
                <p className="mb-0">Stock disponible: {item.stockTotal}</p>
            </div>
        </div>
    ): null
}
export default Item;