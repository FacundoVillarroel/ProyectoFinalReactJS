import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { getDoc,doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import Loading from "../Loading"
import { Link } from "react-router-dom"
import Order from "./Order"
import OrderTracking from "./OrderTrackin"

function OrderContainer (){
    const [loading, setLoading] = useState(true)
    const [order,setOrder] = useState("")
    const {orderId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db,"orders", orderId)
        getDoc(docRef)
            .then((doc) => {
                setOrder({id: doc.id, ...doc.data()})
            })
            .finally(()=>{
                setLoading(false)
            })
    },[orderId])

    return (
        
            loading 

            ? <Loading/>
            
            :
                <div>
                    <h2 className="my-5 text-center">Gracias por comprar en la tienda online de Recreativo F.C.</h2>
                    
                    <div className="container ">
                        <OrderTracking order={order}/>
                        <h2 className="my-5">A continuación los detalles de tu pedido:</h2>
                        <h3 className="col-12 my-5 fs-5">Order número: <span className="trackingId">{order.id}</span></h3>
                        <div className="container text-center"> 
                            <div className="row pb-3 productInCart">
                                <h3 className="col-5 text-start"> Nombre del producto</h3>
                                <h3 className="col-3"> Precio Unitario</h3>
                                <h3 className="col-2"> Cantidad </h3>
                                <h3 className="col-1"> Talle</h3>
                            </div>
                                {order.products.map((item)=>{
                                        return (
                                            <Order item={item}/>
                                        )
                                    })} 
                            <h3>El total de tu orden: {order.total}</h3>   
                        </div>
                        <Link to="/tienda"><button className="buttonReturn">Volver a la tienda</button></Link>
                    </div>
                </div>

        
    )
}

export default OrderContainer