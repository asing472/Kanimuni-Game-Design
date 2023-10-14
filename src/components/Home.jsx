import React from 'react';
import Typed from 'react-typed';
import hero from '../assets/hero.svg'

const Home = () => {
  return (
    <div className='text-[#F7F6D4] bg-[#EE4F3B]'>
      <div className='w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold font-baloo'>
          KANIMUNI
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-2l text-xl font-semibold text-[#FBC097] py-4'>
            A Workshop on Game Design for Education
          </p>
        </div>
        <div className='flex justify-center items-center text-[#FBC097] mx-80'>
        We are happy to announce the second workshop as a part of the Kanimuni, Game Design for Education Initiative. Welcome to Kanmuni: A
        Workshop on Game Design for Education. Join us for a transformative
        ten-day journey into the exciting world of game design.
        </div>
        <Typed
          className='md:text-2xl mt-10 text-xl text-[#F7F6D4]'
            strings={['Get Set Go!']}
            typeSpeed={120}
            backSpeed={20}
            loop
          />
          <img className='w-auto mx-20 h-1/2' src={hero} alt="img1" />
      </div>
    </div>
  );
};

export default Home;
