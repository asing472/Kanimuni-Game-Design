import React from 'react';
import Illustration_last from '../assets/Illustration_last.svg'
import branding from '../assets/branding.png'
import handles from '../assets/handles.svg'

const Branding = () => {
  return (
    <div className='w-full bg-[#F7F6D4] md:px-20 sm:px-20 md:pb-20 sm:pb-20 p-4'>
    <div className='justify-between mb:p-20 sm:p-20 p-4 mb:space-y-16 sm:space-y-16 space-y-2  w-full h-auto shadow-xl bg-[#EE4F3B] flex flex-col rounded-2xl'>
        <div className='flex md:flex-row sm:flex-row flex-col justify-around space-y-4 '>
            <img className='md:h-24 sm:h-24 h-fit w-auto' src={branding} alt="branding" />
            <div className='flex flex-col justify-between space-y-2'>
                <div className='md:text-xl sm:text-l text-s font-semibold text-center text-[#F7F6D4]'>
                    Social Media Handles
                </div>
                <img className='md:h-10 sm:h-10 h-fit w-auto' src={handles} alt="handles" />
            </div> 
        </div>
            <img className='h-28 w-full flex-row items-center md:block sm:block hidden' src={Illustration_last} alt="Illustration_last" />
    </div>
    {/* <div className='flex justify-center text-center text-[#EE4F3B] md:mt-32 sm:mt-32 mt-16 md:text-6xl sm:text-5xl text-2xl font-bold'>
        Register Now!
    </div>
        <a href="https://forms.gle/6Sbg653frcztYZbv5" className='text-black underline justify-center w-full flex mt-2'  target="_blank" rel="noopener noreferrer">
            Click Here
        </a> */}
    </div>
  );
};

export default Branding;


