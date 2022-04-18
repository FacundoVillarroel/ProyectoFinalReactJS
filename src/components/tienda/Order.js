function Order ({item}){
    return(
        <div key={item.id+item.size} className="row productInCart">
            <h3 className="col-5 text-start">{item.title}</h3>
                            <h4 className="col-3">{item.price}</h4>
                            <h5 className="col-2">{item.quantity}</h5>
                            <div className="col-2">
                                <h6>{item.size} </h6>
                            </div>
        </div>
    )
}

export default Order