import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../firebase/config"
import {query, where, documentId, writeBatch, collection, Timestamp, getDocs, addDoc} from "firebase/firestore"
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const order = {
            products:cart,
            total: totalPrice(),
            buyer: {...values},
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const orderRef = collection(db, "orders")
        const productRef = collection (db,"Products")
        
        const q = query(productRef,where(documentId(), "in" ,cart.map((item)=> item.id))) 
        
        const products = await getDocs(q)

        const outOfStock = []

        cart.forEach((product) => {
            
            const itemInCart = products.docs.find((item) => item.id === product.id)

            if(itemInCart.data().category === "pelota"){
                if(itemInCart.data().stockTotal >= product.quantity){
                    batch.update(itemInCart.ref,{
                        stockTotal: itemInCart.data().stockTotal - product.quantity
                    })
                } else {
                    outOfStock.push(product)
                }          
            } else {
                    let talles = itemInCart.data().talles
                    let indexSize = talles.findIndex(prop => prop.sizeName === product.size);
                    
                    if (talles[indexSize].stock >= product.quantity){
                        talles[indexSize].stock = talles[indexSize].stock - product.quantity
                        batch.update(itemInCart.ref,{
                            talles: talles
                        })
                    } else {
                        outOfStock.push(product)
                    }
            }
        })
        if (outOfStock.length === 0){ 
            batch.commit()
            addDoc(orderRef,order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart();
            })
        } else {
            outOfStock.forEach(item => alert("el producto: ",`'${item.title}'`, " no tiene stock suficiente"))
        }
    }

    if (orderId){
        return(
            <Navigate to = {`/order/${orderId}`}/>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/tienda"/>
    }


    return(
        <div className="container d-flex flex-column align-items-center">
            <h2 className=" text-center my-5"> CheckOut </h2>

            <form onSubmit={handleSubmit} className="checkoutForm">  
                
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
                    type={"email"}
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
                <div className="d-flex align-items-center">
                    <Link to="/cart"><button className="buttonReturn">Volver al carrito</button></Link>
                    <button className="buttonPay" type="submit">Realizar compra</button>
                </div>

            </form>
        </div>
    )
}
export default CheckOut