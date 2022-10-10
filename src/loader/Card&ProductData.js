import { getStoredCart } from "../utils/fakeDB";

export const getCardAndProductData = async () => {

    //get data from json
    const productsData = await fetch("products.json");
    //this data convert to json
    const products = await productsData.json();
    //this data comming from localStoarge and comming utils/fakeDB
    //
    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initialCart.push(foundProduct)
        }
    }
    return { products, initialCart };
}