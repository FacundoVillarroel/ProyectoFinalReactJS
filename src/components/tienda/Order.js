const Order = ({item}) => {
    return(
        <div className="row productInCart fs-5 pb-2">
            <p className="col-5 text-start">{item.title}</p>
            <p className="col-3">{item.price}</p>
            <p className="col-2">{item.quantity}</p>
            <div className="col-2">
                <p>{item.size} </p>
            </div>
        </div>
    )
}

export default Order