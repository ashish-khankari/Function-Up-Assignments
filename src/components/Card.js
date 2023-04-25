import React from 'react';
import './Cards.css'
export default function Card({ product }) {

  function showData(){
    alert(`Product of is ${product.name} has of rupees ${product.price} is added in the cart , please proceed to pay !!!`)
  }

  return (
    <div className='cards'>
      <img src={product.image} alt={product.name} className='img'/>
      <h2 className='products' >{product.name}</h2>
      <p className='description'>{product.description}</p>
      <p className='price'>{product.price}</p>
      <button className='btn' onClick={showData}>Add to Cart</button>
    </div>
  );
}
