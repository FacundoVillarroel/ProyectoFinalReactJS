import { Link } from "react-router-dom"

const OrderNotFound = () => {

    return (
        <div className="container text-center">
            <h2 className="my-5">Lo sentimos, tu numero de orden no es correcto</h2>
            <p className="my-5 fs-5">Recuerda controlar las mayúsculas y minúsculas por favor</p>
            <Link to="/tienda"><button className="buttonReturn mb-5">Volver a la tienda</button></Link>
        </div>
    )
}

export default OrderNotFound