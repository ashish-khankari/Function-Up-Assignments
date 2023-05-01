import React, { useRef, useEffect } from 'react';
import './ImageSlider.css'
export default function ImageChange() {
    const myImg = useRef(null)
    function imageChange(){
        myImg.current.src = (`https://picsum.photos/300?random=${Math.floor(Math.random() * 100)}`)
    }

  return (
    <div className='img'>
      <img height={"350px"} className='images' ref={myImg}/>
      <button onClick={imageChange} className='btn'>Change Image</button>
    </div>
  );
}
