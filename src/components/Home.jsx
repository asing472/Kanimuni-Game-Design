import React from 'react';
import Typed from 'react-typed';
import Game from '../assets/Game.png';
import dates from '../assets/dates.svg';

const Home = () => {
  return (
    <div className='text-[#F7F6D4] bg-[#EE4F3B] w-full flex md:h-screen sm:h-screen md:py-10 sm:py-10 py-5 px-10'>
      <div className='text-left flex md:flex-row sm:flex-row justify-center items-start md:space-x-14 sm:space-x-14 flex-col space-y-8'>
        <img className='md:h-96 sm:h-96 h-42 w-auto mt-2' src={Game} alt="Game" />
        <div className='flex flex-col justify-center items-left'>
          <div className='flex justify-left md:text-xl sm:text-xl flex-col space-y-4 text-base text-[#FBC097]'>
            <p>We are happy to announce the second workshop as a part of 
            the Kanimuni, Game Design for Education Initiative.</p>
            <p>Welcome to Kanmuni: A Workshop on Game Design for Education.</p>
            <p>Join us for a transformative ten-day journey into the exciting 
            world of game design.
            </p>
          </div>
          <a href="https://forms.gle/6Sbg653frcztYZbv5" target="_blank" rel="noopener noreferrer">
            <button className='bg-[#F7F6D4] text-[#EE4F3B] md:mt-10 sm:mt-10 mt-8 rounded-md font-bold w-[200px] my-2 px-6 py-3' disabled>
            <Typed
              className='text-l text-[#EE4F3B]'
                strings={['REGISTER HERE']}
                typeSpeed={120}
                backSpeed={20}
                loop
              />
            </button>   
          </a>
          <div className='flex justify-left md:text-xl sm:text-xl flex-col space-y-4 text-base text-white'>
            <p>Registrations Closed!</p>
          </div>
          <img className='md:h-48 sm:h-48 h-36 w-auto' src={dates} alt="dates" />
        </div>
      </div>
    </div>
  );
};

export default Home;

