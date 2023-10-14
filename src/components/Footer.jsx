import React from 'react';
import Illustration_6 from '../assets/Illustration_6.svg'
import Illustration_3 from '../assets/Illustration_3.svg'

const Footer = () => {
  return (
    <div className='w-full flex flex-row justify-between bg-[#F7F6D4] px-20 pb-20 space-x-20'>
        <div className='flex flex-col justify-start w-1/2'>
            <div className='flex flex-col text-black space-y-4'>
                <div className='flex flex-row justify-center w-fit items-center space-x-10 mb-5'>
                    <img className='h-20 w-auto' src={Illustration_6} alt="img6" />
                    <p className='text-[#EE4F3B] md:text-2xl sm:text-2l text-xl font-semibold'>FAQs</p>
                </div>
                <p>1. I am not a design student can I attend? - (NO)</p>
                <p>2. I am a PhD scholar can I attend? - (YES w/Design Background)</p>
                <p>3. I am from the industry can I attend? - (NO)</p>
                <p>4. Where should I pay the registration Fees?</p>
                <p>5. I can’t pay 3k can my registration fees be waived off? - (Write to us)</p>
                <p>6. Can I pay when I get there? - (NO)</p>
                <p>7. Do I need anything for the workshop? - (Laptop etc)</p>
                <p>8. What am I gettng for 3k? - (Certificate, Kit)</p>
            </div>
        </div>
        <div className='flex flex-col justify-start w-1/2'>
            <div className='flex flex-col text-black space-y-4'>
                <div className='flex flex-row justify-center w-fit items-center space-x-10 mb-5'>
                    <img className='h-20 w-auto' src={Illustration_3} alt="img6" />
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

export default Footer;

