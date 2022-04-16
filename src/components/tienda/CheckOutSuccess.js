import { Link } from "react-router-dom"

function CheckOutSuccess ({orderId}) {
    return(
        <div className="container my-5">
            <h2 className="my-5 text-center"> Tu compra se realizó correctamente!</h2>
            <div className="fs-4">
                <h4>HOLA !</h4>
                <p> Gracias por realizar tu pedido a través de la tienda online de Recreativo F.C.</p>
                <p> A continuacion los detalles de tu pedido:</p>
            </div>
            <ul>
                <li><h3 className="my-3">Número de orden: {orderId}</h3></li>
                
                
            </ul>
            

            <Link to="/tienda"><button className="buttonReturn">Volver a la tienda</button></Link>
        </div>
    )
}

export default CheckOutSuccess