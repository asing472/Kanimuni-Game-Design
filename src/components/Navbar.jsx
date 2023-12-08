import React from 'react';
import { Link } from "react-scroll";
import kanimuni from '../assets/kanimuni.png'
import branding from '../assets/branding.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center md:flex-row sm:flex-row flex-col-reverse md:h-32 sm:h-32 h-32 w-full text-white bg-[#EE4F3B]'>
      <div className='flex justify-start items-center pl-10 md:w-fit sm:w-fit w-full mt-4'>
        <img className='md:w-24 sm:w-24 w-14 mx-2' src={kanimuni} alt="logo" />
        <img className='md:h-24 sm:h-24 h-16 w-auto pt-2' src={branding} alt="branding" />
      </div>
      <ul className='flex flex-row cursor-pointer md:w-fit sm:w-fit w-full justify-between mt-8 px-4 text-[#F7F6D4]'>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="about">About</Link></li>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="register">Register</Link></li>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="people">People</Link></li>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="gallery">Gallery</Link></li>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="faqs">FAQs</Link></li>
        <li className='md:p-4 p-1 md:text-base sm:text-base text-xs'><Link activeClass="active" smooth spy to="contacts">Contacts</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
