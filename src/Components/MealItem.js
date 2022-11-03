import React from "react";
import Meal from './Meal'
import './style.css';

const MealItem = (getMeal) => {
    console.log(getMeal.data)
  return (
  
    <div className="card">
       <img src={getMeal.data.strMealThumb}></img>
        <div className="info">
            <h2>{getMeal.data.strMeal}</h2>
            <p>{getMeal.data.strArea}food</p>



        </div>
        <div className="Recipe">
            <h2>Recipe</h2>
            <p>{getMeal.data.strInstructions}</p>
            <img src={getMeal.data.strMealThumb}></img>
            <a href={getMeal.data.strSource} >View Source</a>

        </div>
    </div>
  
    
    
  )
}

export default MealItem