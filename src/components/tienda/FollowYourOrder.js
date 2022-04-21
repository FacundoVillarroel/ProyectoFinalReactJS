import { useState } from "react"
import { Navigate } from "react-router-dom"

function FollowYourOrder(){

    const [orderId,setOrderId] = useState("")
    const [path,setPath] = useState(null)

    if (path){
        return <Navigate to={`/order/${orderId}`}/>
    }
    const handleInputChange = (e) => {
        setOrderId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPath(orderId)
    }
    return(
    <div className="followOrderContainer">
        <form onSubmit={handleSubmit} className="followOrder">
            <h2 className="mb-4">Haz un seguimiento de tu pedido</h2>
            <div className="d-flex align-items-center">
                <input 
                className="inputOrderNumber"
                type={"text"} 
                placeholder={"Ingresa tu número de orden"}
                value={orderId}
                onChange={handleInputChange}>
                </input>
                <button className="buttonPay" type="submit">Buscar orden</button>
            </div>
        </form>
    </div>
    )
}
export default FollowYourOrder