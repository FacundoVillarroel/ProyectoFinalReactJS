const updateStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}
export default updateStorage