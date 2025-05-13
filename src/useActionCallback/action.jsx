import React from 'react'

async function addToCart(prevState, queryData) {
const itemId = queryData.get('itemId')
 
if(itemId === '1') {
    return <p className='text-lg font-semibold'>Added to cart</p>
} else {
    await new Promise(resolve => {
        setTimeout(resolve, 2000)})
}
return "couden't find any item. try something else."
}

export default addToCart