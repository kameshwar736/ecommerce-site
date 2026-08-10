"use client"
import CartContext from '@/contexts/CartContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const CartItems = () => {

    const {cartProducts} = useContext(CartContext)

    console.log(cartProducts);
    

  return (
    <div>

        <div>
            <h1>YOUR CART</h1>
        </div>

        <div>
            {/* cartItems */}
            <div>
                {
                    cartProducts.length==0?<div>No items at Cart</div>:
                    cartProducts.map((e)=>(
                        <div>
                            <div>
                                <Image src={e.image}/>
                            </div>
                            <div>
                                <h1>{e.name}</h1>
                                <p>Size :{e.Size}</p>
                                <p>Color {e.color[0]} </p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>


    </div>
  )
}

export default CartItems