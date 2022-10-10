import { getStoredCart } from "../utils/fakeDB";

const getCardAndProductData = () => {
    export const product = async () => {
        //get data from json
        const productsData = await fetch("product.json");
        //this data convert to json
        const products = await productsData.json();
        //this data comming from localStoarge and comming utils/fakeDB
        //
        const savedCart = getStoredCart();
        const initialCart = [];
        for (const id in savedCart) {
            const foundProduct = product
        }
    }
    return {};
}