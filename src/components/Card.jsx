import React from 'react';

const Card = (props) => {
  const image = props.image;
  const title = props.title;
  const desc = props.desc;
  return (
          <div className='w-full shadow-xl bg-[#EE4F3B] flex flex-col p-8 pb-20 rounded-2xl'>
              <img className='h-20 w-auto flex items-center' src={image} alt="img" />
              <div className='md:text-2xl sm:text-2l text-[#F7F6D4] text-xl font-semibold text-center py-4'>
               {title}
              </div>
              <div className='flex justify-center items-center text-center text-[#FBC097]'>
               {desc}
              </div>
          </div>
  );
};

export default Card;
