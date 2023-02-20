import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="flex justify-between px-8 items-center py-2 ">
                <div className="brand">
                    <p className='text-secondary font-bold text-2xl'>
                        Akumar
                    </p>
                </div>
                <div className="menu">
                    <ul className='flex space-x-4'>
                        <li><NavLink to="/" className='text-bold hover:text-primary  hover:underline underline-offset-8 decoration-2' >Home </NavLink></li>
                        <li><NavLink to="/" className='text-bold hover:text-primary  hover:underline underline-offset-8 decoration-2' >About Us</NavLink></li>
                        <li><NavLink to="/" className='text-bold hover:text-primary  hover:underline underline-offset-8 decoration-2' >Contact Us</NavLink></li>
                        <li><NavLink to="/" className='text-bold hover:text-primary  hover:underline underline-offset-8 decoration-2' >Services</NavLink></li>
                        <li><NavLink to="/" className='text-bold hover:text-primary  hover:underline underline-offset-8 decoration-2' >Gallery</NavLink></li>
                    </ul>
                </div>
                <div className='flex space-x-2 items-center bg-primary px-3 hover:bg-violet-800 py-1 rounded-md'>
                    <button className='text-sm text-white'>Login</button>
                    <ion-icon name="arrow-forward" ></ion-icon>
                </div>
            </div>
        </>
    )
}

export default Navbar;