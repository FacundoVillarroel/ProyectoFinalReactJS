import courierimg from "../../images/Courier.svg"

function OrderTracking ({order}){
    const date = order.date.toDate()
    return(
        <div className="container my-5 ms-5 d-flex row">
            <div className="courierImg col-6">
                <img alt="Courier image" src={courierimg}></img>
            </div>
            <div className="trackingContainer col-6">
                <div>
                    <p className="m-0">Seguimiento de tu orden n°:</p>
                    <p className="trackingId">{order.id}</p>
                </div>
                <div>
                    <div className="trackingItem">
                        <span className="trackingSpan"></span>
                        <p>Confirmado el {date.toUTCString()}</p>
                    </div>
                    <div className="trackingItem">
                        <span className="trackingSpan"></span>
                        <p>Enviado</p>
                    </div>
                    <div className="trackingItem">
                        <span className="trackingSpan"></span>
                        <p>Entregado</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default OrderTracking
