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
import RishabSiddharth from '../assets/RishabSiddharth.png'
import Saurabh from '../assets/Saurabh.png'
import rana from '../assets/rana.jpeg'
import drashti from '../assets/drashti.jpeg'
import prajakta from '../assets/prajakta.jpg'
import hrishita from '../assets/hrishita.jpg'

const OrganizerContainer = () => {
  return (
    <div className='w-full md:mt-20 sm:mt-20 mt-10 bg-[#EE4F3B] shadow-xl flex flex-col justify-between items-center rounded-3xl md:py-10 sm:py-10 py-6'>
        <div className='flex flex-row justify-center w-fit items-center md:space-x-10 sm:space-x-10 space-x-2 mb-10'>
            <img className='md:h-20 sm:h-20 h-8 w-auto' src={Illustration_8} alt="img8" />
            <p className='text-[#F7F6D4] md:text-2xl sm:text-2l text-xl font-semibold'>Organizing Committee</p>
            <img className='md:h-20 sm:h-20 h-8 w-auto' src={Illustration_9} alt="img9" />
        </div>
        <div className='w-full text-[#FBC097] grid grid-flow-row md:grid-cols-3 md:gap-10 sm:gap-10 gap-5 sm: grid-cols-2 md:px-20 sm:px-20 px-4'> 
            <Organizer image={Swati} title={'Swati Pandey'} desc={'PhD Scholar'}/>
            <Organizer image={Shivatmika} title={'Shivatmika Lala'} desc={'PhD Scholar'}/>
            <Organizer image={Arban} title={'Arbaniabud Mawthoh'} desc={'PhD Scholar'}/>
            <Organizer image={Mario} title={'P. Mario K. Pathaw'} desc={'PhD Scholar'}/>
            <Organizer image={Beda} title={'Beda Prakash Das'} desc={'PhD Scholar'}/>
            <Organizer image={Ankit} title={'Ankit Basak'} desc={'PhD Scholar'}/>
            <Organizer image={Akash} title={'Akash Kumar Singh'} desc={'MDes Student'}/> 
            <Organizer image={RishabSiddharth} title={'Rishabh Siddharth'} desc={'MDes Student'}/> 
            <Organizer image={Saurabh} title={'Saurabh Sardar'} desc={'MDes Student'}/> 
            <Organizer image={rana} title={'Rana Sarkar'} desc={'MDes Student'}/>
            <Organizer image={hrishita} title={'Hrishita Chetia'} desc={'MDes Student'}/> 
            <Organizer image={drashti} title={'Drashti Sagar'} desc={'MDes Student'}/> 
            <Organizer image={prajakta} title={'Prajakta Abhyankar'} desc={'MDes Student'}/> 
        </div>
    </div>
  );
};

export default OrganizerContainer;

