import React, { useState, useEffect } from 'react'
import './App.css'
import UserCards from './Components/UserCard';
export default function App() {

  return (
    <>
      <div className='App'>
        <UserCards/>
      </div>
    </>
  );
}
