import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"




function ItemDetail ({item}){
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return(
        <>  
            <div className="itemDetail container d-flex flex-column align-items-center">
                <h3 className="m-3">
                    {item.title}
                </h3>
                <img src={item.imgSrc} alt={item.title} className="productImage mt-4 mb-2"/>
                <p className="fs-6 m-3">
                    {item.description}
                </p >
                <h4 className="mb-4">
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