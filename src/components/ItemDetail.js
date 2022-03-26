import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"




function ItemDetail ({item}){
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

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
                
                <button className="buttonReturn" onClick={handleNavigate}>Volver</button>
            </div>
        </>
    )
}

export default ItemDetail