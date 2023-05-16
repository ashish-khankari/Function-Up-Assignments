import React from 'react'
import './Buttons.css'
export default function Buttons({text, performTask, btn}) {
  return (
    <div>
        <button onClick={performTask} className='btn' > {text} </button>
    </div>
  )
}
