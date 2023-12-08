import React from 'react';

const Instructor = (props) => {
  const image = props.image;
  const title = props.title;
  const desc = props.desc;
  const isRev = props.isRev
  return (
          <div className={isRev ? 'w-full flex md:flex-row-reverse sm:flex-row-reverse flex-col items-center justify-center' : 'w-full flex items-center justify-center md:flex-row sm:flex-row flex-col md:space-x-10 sm:space-x-10 space-x-0' }>
              <img className='rounded-full md:h-64 sm:h-64 h-36 w-auto flex items-center' src={image} alt="img" />
              <div className='flex flex-col space-y-5'>
                <div className='md:text-2xl sm:text-2l text-xl font-semibold md:text-left sm:text-left text-center'>
                {title}
                </div>
                <div className={isRev?'flex md:justify-left sm:justify-left items-center':'flex md:justify-left sm:justify-left items-center'}>
                {desc}
                </div>
              </div>  
          </div>
  );
};

export default Instructor;
