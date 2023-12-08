import React from 'react';
import Illustration_3 from '../assets/Illustration_3.svg'

const Contacts = () => {
  return (
    <div className='w-full flex flex-col justify-between bg-[#F7F6D4] md:px-20 sm:px-20 md:pb-20 sm:pb-20 md:space-y-20 sm:space-y-20 md:pt-0 sm:pt-0 pt-8'>
        <div className='flex flex-col md:w-1/2 sm:w-1/2 md:justify-start sm:justify-start w-fit px-8 justify-center'>
                <div className='flex flex-col text-black space-y-4'>
                    <div className='flex flex-row justify-center w-fit items-center md:space-x-10 sm:space-x-10 space-x-4 md:mb-5 sm:mb-5 mb-2'>
                        <img className='md:h-20 sm:h-20 h-10 w-auto' src={Illustration_3} alt="img6" />
                        <p className='text-[#EE4F3B] md:text-2xl sm:text-2l text-xl font-semibold'>Contact Us</p>
                    </div>
                    <p>For further information please feel free to contact us : </p>
                    <a href="mailto:ankit.basak@iitg.ac.in" className='text-blue-700 underline'  target="_blank" rel="noopener noreferrer">
                    ankit.basak@iitg.ac.in  
                    </a>
                    <a href="mailto:d.beda@iitg.ac.in" className='text-blue-700 underline'  target="_blank" rel="noopener noreferrer">
                    d.beda@iitg.ac.in  
                    </a>
                </div>
        </div>
    </div>
  );
};

export default Contacts;



