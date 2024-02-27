import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItema = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
        
    }

  return (
    <div className='text-center p-4 m-4 font-bold text-xl'>Cart
        <div className='w-6/12 m-auto'>
            <button className='p-2 m-2 bg-black text-white rounded-lg ' onClick={handleClearCart}>
                Clear Cart
            </button>
            <ItemList itemList = {cartItema}/>
        </div>
    </div>
  )
}

export default Cart