import ItemCount from "./ItemCount"



function ItemDetail ({item}){
    return(
        <>  
            <h2>Detalles del producto</h2>
            <div className="container d-flex flex-column align-items-center">
                <h3>
                    {item.title}
                </h3>
                <img src={item.imgSrc} alt={item.title} className="productImage"/>
                <p className="fs-6">
                    {item.description}
                </p >
                <h4>
                    ${item.price}
                </h4>
                <div>
                    <ItemCount stock = {item.stock} initial = {1}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail