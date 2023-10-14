import React from 'react';
import Illustration_last from '../assets/Illustration_last.svg'
import branding from '../assets/branding.png'
import handles from '../assets/handles.svg'

const Branding = () => {
  return (
    <div className='w-full bg-[#F7F6D4] px-20 pb-20'>
    <div className='justify-between p-20 space-y-16 w-full h-auto shadow-xl bg-[#EE4F3B] flex flex-col rounded-2xl'>
        <div className='flex flex-row justify-around'>
            <img className='h-24 w-auto' src={branding} alt="branding" />
            <div className='flex flex-col justify-between'>
                <div className='md:text-xl sm:text-l text-xl font-semibold text-[#F7F6D4]'>
                    Social Media Handles
                </div>
                <img className='h-10 w-auto' src={handles} alt="handles" />
            </div> 
        </div>
            <div className='flex flex-row justify-center'>
            <img className='h-20 w-auto' src={Illustration_last} alt="Illustration_last" />
        </div>
    </div>
    <div className='flex justify-center text-center text-[#EE4F3B] mt-32 md:text-6xl sm:text-5xl text-4xl font-bold'>
        Register Now!
    </div>
        <a href="https://forms.gle/6Sbg653frcztYZbv5" className='text-black underline justify-center w-full flex mt-2'  target="_blank" rel="noopener noreferrer">
            Click Here
        </a>
    </div>
  );
};

export default Branding;


