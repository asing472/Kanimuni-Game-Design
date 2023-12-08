import React from 'react';

const Organizer = (props) => {
  const image = props.image;
  const title = props.title;
  const desc = props.desc;
  return (
          <div className='flex flex-col items-center justify-center space-y-5'>
              <img className='rounded-full md:h-40 sm:h-40 md:w-40 sm:w-40 w-28 h-28 flex items-center' src={image} alt="img" />
              <div className='flex flex-col'>
                <div className='md:text-xl whitespace-nowrap sm:text-l text-l font-semibold'>
                {title}
                </div>
                <div className={'flex justify-center whitespace-nowrap text-sm items-center'}>
                {desc}
                </div>
              </div>  
          </div>
  );
};

export default Organizer;
