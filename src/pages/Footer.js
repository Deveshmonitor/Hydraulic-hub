import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-secondary flex justify-around items-center py-10 flex-wrap mt-20'>
                <div className="brand  text-white">
                    <p className='text-white  text-2xl'>
                        Akumar
                    </p>
                    <p>A kumar Hydraulic Hub</p>
                    <p>Kh. No.628, near shiv mandir, .
                        <br />
                        Sultanpur Majra Village, Delhi, 110041
                    </p>
                    <div className='mt-5'>
                        <p className='underline underline-offset-4'>Contact Details:</p>
                        <p className='mt-1'>+91 98686315533</p>
                        <p className='mt-1'>akumarhydraulichub@gmail.com</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className='space-y-5'>
                        <li><NavLink to="/" className=' font-extralight hover:text-primary  text-white ' >Home </NavLink></li>
                        <li><NavLink to="/" className=' font-extralight hover:text-primary  text-white ' >About Us</NavLink></li>
                        <li><NavLink to="/" className=' font-extralight hover:text-primary  text-white ' >Contact Us</NavLink></li>
                        <li><NavLink to="/" className=' font-extralight hover:text-primary  text-white ' >Services</NavLink></li>
                        <li><NavLink to="/" className=' font-extralight hover:text-primary  text-white ' >Gallery</NavLink></li>
                    </ul>
                </div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0169960447724!2d77.07347761404787!3d28.689138188269826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050158c062af%3A0x2a96869fbd0e4df9!2sA%20KUMAR%20HYDRAULIC%20HUB!5e0!3m2!1sen!2sin!4v1676614677692!5m2!1sen!2sin" width="400" height="270" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='bg-primary'>
                <p className='text-center p-2 text-sm '>&#169; 2023 Akumar.All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer