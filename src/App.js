import React, { useState } from 'react'
import './App.css'
import ShowUserCard from './Components/UserCards';
export default function App() {  
    const [user, setUser] = useState([]);

    
    function getData(){
        fetch(`https://reqres.in/api/users/`)
        .then((response)=>(response.json()))
        .then((userCard)=>setUser(userCard.data))
        .catch((error)=>console.log(error))
    }
    return(
      <div className='App'>
        {user.map((item)=>(<ShowUserCard users = {item}/>))}
       <button onClick={getData} className='btn'>Fetch Data</button>
      </div>
      
  )

    
}
  

