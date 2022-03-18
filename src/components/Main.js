import Offers from './Offers';
import ItemListContainer from './ItemListContainer';

const styles = {
    title: {
    color: "green",
    }
}
const saludo = {
    greeting: "Bienvenido/a a la tienda de Recreativo",
    estilo:{
    color:"red",
    }
}

function Main () {
    return (
        <main className="main container">
            <ItemListContainer greeting = {saludo.greeting} estilo = {saludo.estilo}/>
            <div style={styles.title}> < Offers /> </div>
        </main>
    )
}
export default Main