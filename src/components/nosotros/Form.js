function Form () {

    return(

        <section className="formulario">
            <div className="container justify-content-center">
                <form action="#">
                    <h2 className="titular">Formulario de Contacto</h2>
                    <input className="form-control form-group input" type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre"/>
                    <input className="form-control form-group input" type="text" name="apellidos" id="apellidos" placeholder="Escribe tu apellido"/>
                    <input className="form-control form-group input" type="email" name="email" id="email" placeholder="Escribe tu email" required />
                    <div className="form-group">
                        <label className="label" for="comentario">¿Desea recibir novedades?</label>
                        <input className="cursor" type="checkbox" name="acepta" value="1"/>
                    </div>
                    <textarea className="form-control" name="mensaje" placeholder="Dejá tu comentario, máximo 300 carácteres" maxlength="300"></textarea>
                    <input className="enviar" type="submit" name="enviar" value="Enviar datos"/>
                </form>
            </div>
        </section>

    )
}
export default Form