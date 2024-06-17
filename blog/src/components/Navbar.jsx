import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//react icons
import { FaBars, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import Modal from './Modal';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blog" },
        { path: "/contact", link: "Contact" },
    ]

     function openModal(){
        setIsModalOpen(true);
        console.log(isModalOpen)
     }
     function closeModal(){
        setIsModalOpen(false);
     }

    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a hre f="/" className='text-xl font-bold text-white '>Design<span className='text-orange-500'>DK</span></a>
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, link }) =>
                            <li key={path} className='text-white'>
                                <NavLink className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        
                                            : ""
                                } to={path}>{link}</NavLink>
                            </li>)
                    }
                </ul>

                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                    <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:text-orange-500 hover:bg-white transition-all duration-200 ease-in'>Log In</button>
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal}/>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>

                {/* menu items only fro mobile */}


            </nav>
            <div>
                <ul className={`'md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-1 bg-white' 
                    ${isMenuOpen ? "fixed top-0left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) =>
                            <li key={path} className='text-black'>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>)
                    }
                </ul>
            </div>
        </header>
    )
}

