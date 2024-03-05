// import './App.css'
import React from 'react';
import Navbar from './components/cores/navigation-bar/navbar';
import { Outlet } from "react-router-dom";



function App() {
  
  return (
    <>
    <div className='container'>
     <Navbar/>
     
     <Outlet/>
     </div>
    </>
  )
}

export default App
