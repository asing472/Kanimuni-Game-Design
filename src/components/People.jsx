import React from 'react';
import Illustration_6 from '../assets/Illustration_6.svg'
import Illustration_7 from '../assets/Illustration_7.svg'
import Instructor from './Instructor';
import inst1 from '../assets/inst1.png'
import inst2 from '../assets/inst2.png'
import inst3 from '../assets/inst3.png'
import OrganizerContainer from './OrganizerContainer';

const People = () => {
  return (
    <div className='w-full flex flex-col justify-between items-center bg-[#F7F6D4] md:p-20 sm:p-20 p-6'>
        <div className='flex flex-row justify-center w-fit items-center md:space-x-10 sm:space-x-10 space-x-2 mb-10'>
            <img className='md:h-20 sm:h-20 h-10 w-auto' src={Illustration_6} alt="img6" />
            <p className='text-[#EE4F3B] md:text-2xl sm:text-2l text-xl font-semibold'>Speakers and Instructors</p>
            <img className='md:h-20 sm:h-20 h-10 w-auto' src={Illustration_7} alt="img7" />
        </div>
        <div className='flex flex-col justify-between space-y-5'> 
            <Instructor image={inst1} title={'Dr. Prasad Bokil'} desc={"Dr. Prasad Bokil is a Mechanical engineer and Communication designer with Masters and PhD in Communication Design from IDC School of Design. As a faculty, he teaches various courses at undergraduate as well as postgraduate level. Prior to IIT Bombay, he was teaching at Department of Design, IIT Guwahati for five years. His interests are visual language, visual narratives and game design. He is currently working towards ‘design for wellbeing’."}/>
            <Instructor image={inst2} isRev title={'Dr. Pankaj Upadhyay'} desc={"Pankaj Upadhyay is a faculty of the Department of Design at IIT Guwahati. His expertise lies in Product Design, Prototyping and Design for social innovation. One of his research areas is understanding how digital and physical games can create a meaningful impact on people's lives. He has actively guided several master's and bachelor's students in designing physical games for their thesis projects."}/>
            <Instructor image={inst3} title={'Sheetal Gokhale'} desc={"Sheetal Gokhale teaches visual communication in the department of design. With a background in film, animation, graphic design and visual storytelling, she works extensively with students on visual design projects. As a part of the Kanimuni project since 2016, she has helped design, develop and prototype games for education. Her research areas are visual communication, design for film, narrative structures, and metaphors in cinema."}/>       
        </div>
        <OrganizerContainer/>
    </div>
  );
};

export default People;

