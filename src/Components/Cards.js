import React from 'react'
import { Data } from './Data'
import './Cards.css'
const Cards = () => {
    return (
        <div className='container'>

            {
                Data.map((item) => (
                    <div className='card-scrollbar'>
                        <img className='image' src={item.image} />
                        <div className='user-data'>
                            <li>{item.name}</li>
                            <li>{item.designation}</li>
                            <li>{item.experience}</li>
                        </div>

                    </div>

                ))
            }


        </div>
    )
}

export default Cards