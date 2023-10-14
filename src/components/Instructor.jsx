import React from 'react';

const Instructor = (props) => {
  const image = props.image;
  const title = props.title;
  const desc = props.desc;
  const isRev = props.isRev
  return (
          <div className={isRev ? 'w-full flex flex-row-reverse items-center justify-center' : 'w-full flex items-center justify-center flex-row space-x-10' }>
              <img className='rounded-full h-64 w-auto flex items-center' src={image} alt="img" />
              <div className='flex flex-col space-y-5'>
                <div className='md:text-2xl sm:text-2l text-xl font-semibold'>
                {title}
                </div>
                <div className={isRev?'flex justify-center items-center mr-5':'flex justify-center items-center'}>
                {desc}
                </div>
              </div>  
          </div>
  );
};

export default Instructor;
