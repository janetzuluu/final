import NavBar from "./NavBar"
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import Contact from "./Contact"
import Hero from "./Hero"
import Login from './Login'
import React, { useState, useEffect } from 'react'

import Authent from "./Authent"

import Meal from "./Components/Meal"




function App() {



  
  return (
   <BrowserRouter>
     <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="/Home" element={<Meal/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Login" element={<Authent/>}></Route>
 
      


    </Routes>


  </div>
   </BrowserRouter>

  );
}

export default App;