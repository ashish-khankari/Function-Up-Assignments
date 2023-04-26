import React, { useState } from "react";
import './Name.css'
export default function NameUpdate() {

    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('***');


    
    function changeName(e) {
       
        setName(e.target.value)
        
    }

    function formSubmit(e) {
        e.preventDefault();
        setDisplayName(name);
        setName("");
    }

    return (
        <>
            <div>
                <form className="form" onSubmit={formSubmit}>
                    <input type="text" value={name} onChange={changeName} className="input" />
                    <button className="btn" >Submit</button>

                    <h2>Hello, My name is: </h2>
                    <h1 className="myName">{displayName}</h1>
                </form>
            </div>
        </>
    )
}