import { Link } from "react-router-dom"
import {BsFillTrashFill} from "react-icons/bs"

const ItemInCart = ({item,removeItem}) => {

    return(
        <div key={item.id+item.size}className="row productInCart justify-content-start">
            <h3 className="col-3 text-start">{item.title}</h3>
            <div className="col-3">
                <Link to={`/item/${item.id}`}><img src={item.imgSrc} className="productImage" alt="item.title"></img></Link>
            </div>
            <h4 className="col-2">{item.price}</h4>
            <h5 className="col-2">{item.quantity}</h5>
            <div className="col-2 d-flex justify-content-around align-items-center">
                <h6>{item.size} </h6>
                <button onClick={() => removeItem(item.id,item.size)} className="buttonDeleteItem"> <BsFillTrashFill/></button>
            </div>
            
        </div>
    )
}

export default ItemInCart