import itemsImported from "../data/items"

export const getProducts = () =>{
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve (itemsImported);
        }, 2000)   
    })
}