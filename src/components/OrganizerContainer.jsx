import React from 'react';
import Illustration_8 from '../assets/Illustration_8.svg'
import Illustration_9 from '../assets/Illustration_9.svg'
import Organizer from './Organizer';
import Swati from '../assets/Swati.svg'
import Shivatmika from '../assets/Shivatmika.svg'
import Arban from '../assets/Arban.svg'
import Mario from '../assets/Mario.png'
import Beda from '../assets/Beda.svg'
import Ankit from '../assets/Ankit.svg'
import Akash from '../assets/Akash.png'

const OrganizerContainer = () => {
  return (
    <div className='w-full mt-20 bg-[#EE4F3B] shadow-xl flex flex-col justify-between items-center rounded-3xl py-10'>
        <div className='flex flex-row justify-center w-fit items-center space-x-10 mb-10'>
            <img className='h-20 w-auto' src={Illustration_8} alt="img8" />
            <p className='text-[#F7F6D4] md:text-2xl sm:text-2l text-xl font-semibold'>Organizing Committee</p>
            <img className='h-20 w-auto' src={Illustration_9} alt="img9" />
        </div>
        <div className='w-full text-[#FBC097] grid grid-flow-row md:grid-cols-3 gap-10 sm: grid-cols-2 px-20'> 
            <Organizer image={Swati} title={'Swati Pandey,'} desc={'PhD Student'}/>
            <Organizer image={Shivatmika} title={'Shivatmika Lala,'} desc={'PhD Student'}/>
            <Organizer image={Arban} title={'Arbaniabud Mawthoh,'} desc={'PhD Student'}/>
            <Organizer image={Mario} title={'P. Mario K. Pathaw,'} desc={'PhD Student'}/>
            <Organizer image={Beda} title={'Beda Prakash Das,'} desc={'PhD Student'}/>
            <Organizer image={Ankit} title={'Ankit Basak,'} desc={'PhD Student'}/>
            <Organizer image={Akash} title={'Akash Kumar Singh,'} desc={'MDes Student'}/> 
        </div>
    </div>
  );
};

export default OrganizerContainer;

