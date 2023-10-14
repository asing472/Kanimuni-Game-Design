import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";
import LOGO from '../assets/LOGO.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-32 mx-auto pr-4 text-white bg-[#EE4F3B]'>
      <img className='w-40' src={LOGO} alt="logo" />
      <ul className='hidden md:flex cursor-pointer text-[#F7F6D4]'>
        <li className='p-4'><Link activeClass="active" smooth spy to="about">About</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="register">Register</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="people">People</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="footer">FAQs</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="footer">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] cursor-pointer ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4'><Link activeClass="active" smooth spy to="about">About</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="register">Register</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="people">People</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="footer">FAQs</Link></li>
        <li className='p-4'><Link activeClass="active" smooth spy to="footer">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
