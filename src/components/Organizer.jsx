import React from 'react';

const Organizer = (props) => {
  const image = props.image;
  const title = props.title;
  const desc = props.desc;
  return (
          <div className='flex flex-col items-center justify-center space-y-5'>
              <img className='rounded-full h-40 w-40 flex items-center' src={image} alt="img" />
              <div className='flex flex-col'>
                <div className='md:text-xl sm:text-l text-xl font-semibold'>
                {title}
                </div>
                <div className={'flex justify-center items-center'}>
                {desc}
                </div>
              </div>  
          </div>
  );
};

export default Organizer;
