import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../firebase/config"
import {collection, addDoc, Timestamp,doc, updateDoc, getDoc} from "firebase/firestore"
import { Link, Navigate } from "react-router-dom"

function CheckOut (){

    const {cart,totalPrice,emptyCart} = useContext(CartContext)

    const [orderId,setOrderId] = useState(null)
    const [values,setValues] = useState({
        name: "",
        email:"",
        phone:""
    })

    function handleInputChange(e){
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        const order = {
            products:cart,
            total: totalPrice(),
            buyer: {...values},
            date: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(db, "orders")
        cart.forEach(product => {
            const docRef = doc(db,"Products",product.id)

            getDoc(docRef)
                .then((doc)=>{
                    if(doc.data().stockTotal >= product.quantity){
                        updateDoc(docRef, {
                            stockTotal: doc.data().stockTotal - product.quantity
                        })
                    }
                    else{
                        alert("no hay stock")
                    }
                })
        });
        addDoc(orderRef,order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart();
                
            })
    }

    if (orderId){
        return(
            <div className="container my-5 text-center">
                <h2 className="my-5"> Tu compra se realizó correctamente</h2>
                <hr/>
                <h3 className="my-3"> Guarda tu número de orden: {orderId}</h3>
                <Link to="/tienda"><button className="buttonReturn">Volver a la tienda</button></Link>
            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/tienda"/>
    }


    return(
        <div className="container">
            <h2 className=" text-center my-5"> CheckOut </h2>
            <hr/>

            <form onSubmit={handleSubmit}>  
                
                <input
                    className="form-control my-2"
                    type={"text"}
                    placeholder={"Ingresa tu nombre"}
                    value={values.name}
                    name="name"
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="form-control my-2"
                    type={"mail"}
                    placeholder={"Ingresa tu email"}
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="form-control my-2"
                    type={"tel"}
                    value={values.phone}
                    placeholder="Ingresa tu Teléfono"
                    name="phone"
                    onChange={handleInputChange}
                    required
                /> 

                <button className="btn btn-success" type="submit">Enviar</button>

            </form>
        </div>
    )
}
export default CheckOut