import { useNavigate } from "react-router-dom"

function Cart () {
    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(-1)
    }

    return(
        <div className="text-center">
            <h1 className="my-5 text-center">Carrito</h1>
            <button className="buttonReturn " onClick={handleNavigate}> Volver atras</button>
        </div>
    )
}

export default Cart