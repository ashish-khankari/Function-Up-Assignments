import { useState } from 'react';
import './Count.css'



export default function Count() {
    let data = 0;
    const [count, setCount] = useState(data)
    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    return (

        <div className='counter'>
            
            <button className='decrementBtn' onClick={decrement}>Decrement</button>
            <p className='countData'>{count}</p>
            <button className='incrementBtn' onClick={increment}>Increment</button>

        </div>

    )
}