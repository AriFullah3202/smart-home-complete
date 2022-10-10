import React, { useContext, useState } from 'react'
import { ProductContext, CartContext } from './Root';
import Product from './Product';
import { addToDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext)
  console.log(cart)


  //jokhon click kora hbe ekhane ekta ekta product asche
  const handleAddToCart = (product) => {
    //ekahne array of object save hbe
    let newCart = []
    const exiting = cart.find(
      exitingProduct => exitingProduct.id === product.id
    )
    if (exiting) {
      const rest = cart.filter(exitingProduct => exitingProduct.id === product.id);
      exiting.quantity = exiting.quantity + 1;
      newCart = [...rest, exiting]
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    setCart(newCart)
    console.log(newCart)
    addToDb(product.id)
    toast.success('Product Added', { autoClose: 300 })
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map((product, index) => {
            return <Product key={index} product={product} handleAddToCart={handleAddToCart}></Product>
          })
        }
      </div>
    </div>
  )
}

export default Shop
