import { Link } from "react-router-dom"


function OrderNotFound () {

    return (
        <div className="container text-center">
            <h2 className="my-5">Tu número de orden no es correcto</h2>
            <Link to="/tienda"><button className="buttonReturn">Volver a la tienda</button></Link>
        </div>
    )
}

export default OrderNotFound