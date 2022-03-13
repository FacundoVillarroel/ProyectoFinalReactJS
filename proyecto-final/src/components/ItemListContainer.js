function ItemListContainer({greeting, estilo}){
    return(
        <div>
            <h2 className= "text-center pb-2" style={estilo}>{greeting}</h2>
            <ul>
                <li> Producto 1 </li>
                <li> Producto 2 </li>
                <li> Producto 3 </li>
                <li> Producto 4 </li>
            </ul>
        </div>
        )
}
export default ItemListContainer