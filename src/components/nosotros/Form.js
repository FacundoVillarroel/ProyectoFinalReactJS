import { db } from "../../firebase/config"
import { collection,addDoc } from "firebase/firestore"
import { useState } from "react"

const Form = () => {

    const [messageSent,setMessageSent] = useState(null)
    const [values,setValues]= useState({
        name:"",
        surname:"",
        email:"",
        message:"",
        newsLetter:false
    })
    
    const handleCheckbox = (e) => {
        setValues({
            ...values,
            newsLetter:e.target.checked
        })
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const contactUsRef = collection(db, "contactUs")
    const handleSubmit = (e) => {
        e.preventDefault()
        const message={
            name:values.name,
            surname:values.surname,
            email:values.email,
            message:values.message,
            newsLetter:values.newsLetter
        }
        console.log(message);
        addDoc(contactUsRef,message)
        .then((doc)=> setMessageSent(doc.id))
        setValues({name:"",
        surname:"",
        email:"",
        message:"",
        newsLetter:false})
    }

    if(messageSent){
        return( 
            <div className="messageSent">
                <h2>Gracias por contactarte con nosotros, te responderemos a la brevedad!</h2>
            </div>
        )
    }
    
    return(

        <section className="formulario">
            <div className="container justify-content-center">
                <form onSubmit={handleSubmit}>
                    <h2 className="titular">Formulario de Contacto</h2>
                    <input className="form-control form-group input" 
                    type="text" 
                    value={values.name}
                    name="name"  
                    placeholder="Escribe tu nombre"
                    onChange={handleInputChange}
                    required/>

                    <input className="form-control form-group input" 
                    type="text" 
                    value={values.surname}
                    name="surname"  
                    placeholder="Escribe tu apellido"
                    onChange={handleInputChange}
                    required/>

                    <input className="form-control form-group input" 
                    type="email" 
                    value={values.email}
                    name="email"  
                    placeholder="Escribe tu email" 
                    onChange={handleInputChange}
                    required/>
                    
                    <div className="form-group">
                        <label className="label" htmlFor="comentario">¿Desea recibir novedades?</label>
                        <input className="cursor" type="checkbox" name="newsLetter" onChange={handleCheckbox}/>
                    </div>
                    <textarea className="form-control" 
                    value={values.message}
                    name="message" 
                    placeholder="Dejá tu comentario, máximo 300 carácteres" 
                    maxLength="300" 
                    onChange={handleInputChange}
                    required></textarea>
                    <input className="enviar" type="submit" name="send" value="Enviar datos"/>
                </form>
            </div>
        </section>

    )
}
export default Form