import Item from "./Item.js"


const ItemList = ({products}) => {

    return(
        <div className="productList d-flex flex-wrap">
                {products.map((item, key) => {
                    return <Item item={item} key={key} />;
                })}
        </div>
    )
}

export default (ItemList) 