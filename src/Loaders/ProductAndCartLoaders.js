

import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            addedProduct.quantity = savedCart[id];
            initialCart.push(addedProduct)
        }
    }

    return { products, initialCart };  // a function return only one value thats why we wrap them into one object '
}