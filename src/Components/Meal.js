import React, { useState } from 'react'
import Hero from '../Hero';
import MealItem from './MealItem'
import NavBar from '../NavBar';

import '../index.css';

const Meal = () => {
  
  const [search,setSearch]=useState("");
  const [MyMeal, setMeal]=useState()
  const searchMeal=(evt)=>{
    if(evt.key=="Enter"){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
      .then(response=>response.json())
      .then(data=>{
       // console.log(data)
       setMeal(data.meals)
      })
    }
    
  }
 
  return (
  
    <div className="main">
     
        <div className='heading'><h1>Welcome to Recipes</h1>
        <h2>Please enter a Recipe down Below</h2>
        
        </div>
<div className='searchBox'>
    <input type="search" className="search-bar" placeholder="Enter main Ingredient" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}>
    </input>

</div>
<div className='container'>
  {
    (MyMeal==null)? <p>Please enter a recipe above.

    </p>: MyMeal.map((response)=>{
      return(
        <MealItem data={response}/>
      )
    })
  }
  
  
    </div>
   

    </div>
  );
}

export default Meal