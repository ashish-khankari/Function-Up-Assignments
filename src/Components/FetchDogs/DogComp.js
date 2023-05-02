import React, { useState, useEffect } from 'react';
import './DogComp.css'
export default function DogComp() {
  
  const [state, setState] = useState("")


    useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response)=>(response.json()))
    .then((data)=>(setState(data.message)))
    .catch((error) => console.log(error))  
  }, [])
  
  return (
    
    <div className='img'>
      <h1 className='text'>Refresh to see new Images</h1>
      <img src={state} className='images'/>
    </div>
  );
}
