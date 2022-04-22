const MaximasGoleadas = () => {
    return (
        <article className="maximasGoleadas">
            <h3 className="titular">Maximas goleadas</h3>
            <div>
                <table className="fondo">
                    <tbody> 
                        <tr><th>Resultado</th><th>Vs</th></tr>
                        <tr><td className="aFavor">7-2</td><td>San Lorenzo</td></tr>
                        <tr><td className="aFavor">6-0</td><td>Poeta FC</td></tr>
                        <tr><td className="aFavor">6-3</td><td>La Boqueria FC</td></tr>
                        <tr><td className="aFavor">5-0</td><td>Alayama FC</td></tr>
                        <tr><td className="aFavor">5-2</td><td>Sangrion FC</td></tr>
                        <tr><td className="enContra">0-5</td><td>La Fusión</td></tr>
                        <tr><td className="enContra">0-5</td><td>Promesa</td></tr>
                        <tr><td className="enContra">0-5</td><td>Sangrión FC Libre</td></tr>
                    </tbody>                
                </table>
            </div>
        </article>          
    )
}

export default MaximasGoleadas