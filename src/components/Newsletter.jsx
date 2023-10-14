import React from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault()
  alert('Submitted')
  emailjs.sendForm('service_itqi2y7', 'template_5r83reb', e.target, '6oW-wWi8SQiT7Cz9b')
}

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-5'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want some more details?
          </h1>
          <p>Feel free to drop us a mail.</p>
        </div>
        <div className='lg:col-span-3 my-4'>
        <form className='contact__form' onSubmit={sendEmail}>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full space-x-2'>
            <input 
              className='p-3 flex w-full rounded-md text-black'
              type='text'
              name='message'
              id='message'
              placeholder='Enter your message'
            />
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='text'
              name='emailFrom'
              id='emailFrom'
              placeholder='Enter your email id'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Send
            </button>
          </div>
        </form>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
