const getStorage =() => {
    let cartInLocal = localStorage.getItem("cart")
    if (cartInLocal === "undefined" || cartInLocal === null){
        return []
    } else {
        return JSON.parse(cartInLocal)}
}  
export default getStorage