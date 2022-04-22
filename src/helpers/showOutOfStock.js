function showOutOfStock(outOfStock){
    if(outOfStock.length ===1) {
        if(outOfStock[0].category === "pelota"){
            return <p className="my-3 title">Lo sentimos, no tenemos stock del producto: {outOfStock[0].title}</p>
        } else {
            return <p className="my-3 title">{`Lo sentimos, no tenemos stock del producto: ${outOfStock[0].title} talle "${outOfStock[0].size}"`}</p>
        }
    } else { 
        return(
            <div>
                <ul className="my-3 title">Lo sentimos, no tenemos stock de los siguientes productos:
                    {outOfStock.map((item,key) => {
                        if(item.category === "pelota"){
                            return <li key={key} className = "my-3 items">{item.title}</li>
                        } else {
                            return <li key={key} className = "my-3 items">{`${item.title} talle "${item.size}"`}</li>
                        }
                    })}
                </ul>
            </div>
        )

    }
}
export default showOutOfStock