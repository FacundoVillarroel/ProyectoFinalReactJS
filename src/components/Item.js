
function Item (item){
    return item?(
        <div className= "product d-flex flex-column align-items-center">
            <div className ="productName pt-1 pb-1">
                <p>{item.item.title}</p>
            </div>
            <div className="productImageContainer d-flex justify-content-center align-items-center mt-3 mb-2">
                <img src={item.item.imgSrc} alt="conjunto titular" className="productImage" />
            </div>
            <div className="productPrice mt-2">
                <p className="mb-0">Precio: ${item.item.price}</p>
            </div>
            <button className="viewDetails mt-1 mb-1 ">Ver detalles</button>
            <div className="stock mb-0">
                <p className="mb-0">Stock disponible: {item.item.stock}</p>
            </div>
        </div>
    ): null
}
export default Item;