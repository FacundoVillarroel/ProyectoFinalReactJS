import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {db} from "../../firebase/config"
import {query, where, documentId, writeBatch, collection, Timestamp, getDocs, addDoc} from "firebase/firestore"
import { Link, Navigate } from "react-router-dom"
import showOutOfStock from "../../helpers/showOutOfStock"
import validateEmail from "../../helpers/validateEmail"
import notEmpyFields from "../../helpers/notEmptyFields"

const outOfStock = []
function CheckOut (){
    const {cart,totalPrice,emptyCart} = useContext(CartContext)

    const [isOutOfStock,setIsOutOfStock] = useState(false)
    const [orderId,setOrderId] = useState(null)
    const [values,setValues] = useState({
        name: "",
        email:"",
        phone:"",
        address:""
    })

    function handleInputChange(e){
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(validateEmail(values.email) || notEmpyFields(values)){
            return alert("Debés completar todos los campos correctamente")
        } 

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
                let sizeToModify = itemInCart.data()[`stock${product.size}`]
                    if (sizeToModify >= product.quantity){
                        batch.update(itemInCart.ref, {
                            [`stock${product.size}`]: sizeToModify - product.quantity
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
            setIsOutOfStock(true)
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
        <>  
            {isOutOfStock
            ? <div className="container d-flex flex-column align-items-center outOfStock">
                {showOutOfStock(outOfStock)}
                <Link to= "/cart" className="buttonReturn fs-5"> Volver al carrito</Link>
            </div>
            :        
            <div className="container d-flex flex-column align-items-center">
                <h2 className=" text-center my-5"> Ingresa tus datos para la compra </h2>

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
                    {(validateEmail(values.email))&&<p className="m-0 ps-1">Debes inglesar un email valido</p>}

                    <input
                        className="form-control my-2"
                        type={"tel"}
                        value={values.phone}
                        placeholder="Ingresa tu Teléfono"
                        name="phone"
                        onChange={handleInputChange}
                        required
                    /> 
                    <input
                        className="form-control my-2"
                        type={"text"}
                        value={values.address}
                        placeholder="Ingresa la dirección de entrega"
                        name="address"
                        onChange={handleInputChange}
                        required 
                    /> 
                    {(notEmpyFields(values))&&<p className="ps-1">Debés llenar todos los campos</p>}
                    <div className="d-flex align-items-center">
                        <Link to="/cart"><button className="buttonReturn">Volver al carrito</button></Link>
                        <button className="buttonPay" type="submit">Realizar compra</button>
                    </div>
                </form>
            </div>
            }   
        </>
    )
}
export default CheckOut