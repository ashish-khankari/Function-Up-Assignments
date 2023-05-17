import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Molecules/Navbar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Support from './Components/Pages/Support';
import Home from './Components/Template/Home';
export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutUs' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/support' element={<Support/>}/>

      </Routes>
    </BrowserRouter>


  );
}



