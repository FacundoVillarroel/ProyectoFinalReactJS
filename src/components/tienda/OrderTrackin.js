import courierimg from "../../images/Courier.svg"  

function OrderTracking ({order}){
    const date = order.date.toDate()
    return(
        <div className="container my-5 ms-5 d-flex row">
            <div className="courierContainer col-6">
                <img alt="Courier" src={courierimg} className="courierImg"></img>
            </div>
            <div className="trackingContainer col-6">
                <div>
                    <p className="m-0">Seguimiento de tu orden n°:</p>
                    <p className="trackingId">{order.id}</p>
                </div>
                <div>
                    <div className="trackingItem">
                        <span className="trackingSpan isChecked"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="path" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></span>
                        <p>Confirmado el {date.toUTCString()}</p>
                    </div>
                    <div className="trackingItem">
                        <span className="trackingSpan"></span>
                        <p>Enviado</p>
                    </div>
                    <div className="trackingItem">
                        <span className="trackingSpan"></span>
                        <p>{`Entregado a la dirección: ${order.buyer.address}`}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default OrderTracking
