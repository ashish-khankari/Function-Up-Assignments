import React, { useState } from 'react'
import axios from 'axios';
import './Dog-Axios.css'
export default function DogApi() {

    const [images, setImages] = useState("https://images.pexels.com/photos/15912960/pexels-photo-15912960.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")

    
    function loadimages(){
        axios.get(`https://dog.ceo/api/breeds/image/random`)
            .then(response => setImages(response.data.message))
            .catch((error) => console.log(error))
    }
        
    return (
        <div>
            <img src={images} className='images' />
            <button onClick={loadimages} className='btn'>Load Images</button>
        </div>
    )
}