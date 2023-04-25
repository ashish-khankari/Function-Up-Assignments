import React from 'react'
import './Cards.css';
export default function Cards({data ,cardStyle}) {
    
const {
    productId,
    productPic,
    productName,
    Brand,
    productDescription,
    price,
    

    
} = data

const handleName = () =>{
    alert(`product of is ${productId} which is ${productName} of brand ${Brand} has of rupees ${price} is added in the cart, please proceed to pay !!! `)
}
  return (
    <div className='container'>
        <h1>{productId}</h1>
        <img src={productPic} height='150px' width='130px' />
        <h1>{productName}</h1>
        <p>{Brand}</p>
        <p>{productDescription}</p>
        <h1>{price}</h1>
        <button style={cardStyle} onClick={handleName}>ADD TO CART</button>

      
    </div>
  )
}
