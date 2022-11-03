import React from 'react'
import Meal from './Components/Meal'
export const Hero = ({handleLogout}) => {
return (
<div classname="hero">
<nav>
<h2><Meal/></h2>
<button onClick={handleLogout}>Logout</button>
</nav>
</div>
)}