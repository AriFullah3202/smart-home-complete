import React, { createContext } from 'react'
import { Outlet } from 'react-router';
import Header from "./Header";
import Footer from "./Footer";

const ProductContext = createContext([])

const Root = () => {
    return (
        <ProductContext.Provider value={[]}>
            <Header></Header>

            <Outlet></Outlet>
            <Footer></Footer>
        </ProductContext.Provider>
    )
}

export default Root
