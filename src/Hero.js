import React from 'react'
import { Link } from 'react-router-dom';
import Meal from './Components/Meal'
import HeroImg from './foodpic.png'
import './style.css';
const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e9f9f9] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Recipes</h1>
                <p className='text-2xl'>To enhance your already <b className='text-[#8cb1b9]'>amazing cooking!</b></p>
                <p className='text-sm'>Discover new recipes and instructions that will enhance your cooking.</p>
                <p className='text-sm'>Spice up your next dish with our large database of recipes!</p>
            <br></br>
            <Link to="/home">
            <button
    
              type="button"
              
              onClick={<Meal/>}
              className="text-white bg-[#8cb1b9] hover:bg-[#8cb1b9] focus:ring-4 focus:outline-none focus:ring-[#8cb1b9] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#8cb1b9] dark:hover:bg-[#8cb1b9] dark:focus:ring-[#8cb1b9]">
              Get Started
            </button>
            </Link>
            </div>
            <div className='img3'>
                <img className='w-full' src={HeroImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero