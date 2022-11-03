import React from 'react'

const NavBar = () => {
  return (
    <div className="bg-[#8cb1b9] text-xl fixed w-full h-8 flex flex-row justify-between items-center">
        <>
        <span>
            <br></br>

        </span>
        </>

        <ul className="menu-list lg:flex lg:flex-row text-xl">
            <li class ="mx-4 my-6 md:my-0">
                <a href="/" class="hover:text-white duration-500"> Home</a>
                <a href="Contact" class="hover:text-white duration-500"> Contact</a>
                
            </li>
        </ul>
    </div>
  )
}

export default NavBar