import React, { createContext, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router';
import Header from "./Header";
import Footer from "./Footer";


export const ProductContext = createContext([])
export const CartContext = createContext([]);

const Root = () => {

    const { products, initialCart } = useLoaderData();
    console.log(initialCart)
    const [cart, setCart] = useState(initialCart);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>

                <Header></Header>

                <Outlet></Outlet>
                <Footer></Footer>

            </CartContext.Provider>
        </ProductContext.Provider >
    )
}

export default Root
