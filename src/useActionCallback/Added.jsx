import React, { useActionState } from 'react'
import addToCart from './action'

const AddedtoCart = ({itemId, title}) => {
    const [massage, formAction, isPending] = useActionState(addToCart, null)

    return (
        <form action={formAction} className='text-white  text-center bg-transparent '>
            <h2>{title}</h2>
            <input type="hidden" name='itemId' value={itemId} />
            <button type='submit'>Add to cart</button>
            {
                isPending ? "Loding...." : massage 
            }
        </form>
    )
}


const Cart = () => {
  return (
    <>
        <AddedtoCart itemId="1" title="Apple" />
        <AddedtoCart itemId="2" title="Orange" />
    </>
  )
}

export default Cart