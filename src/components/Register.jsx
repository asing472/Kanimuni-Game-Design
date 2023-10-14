import React from 'react';
import Illustration_5 from '../assets/Illustration_5.svg'

const Register = () => {
  return (
    <div className='w-full flex flex-row justify-between p-20 space-x-20 bg-[#EE4F3B]'>
    <div className='flex flex-col justify-start w-1/2'>
        <div className='flex flex-col text-[#FBC097] space-y-4'>
          <p className='text-[#F7F6D4] md:text-2xl sm:text-2l text-xl font-semibold'>Workshop Details</p>
          <p>
          The workshop will be held from 8th to 17th December 2023 at the
          Department of Design, Indian Institute of Technology Guwahati.
          </p>
          <p>
          Registration Fees are applicable for Undergraduate and Postgraduate Design Students at Rs. 3000 Per participant
          </p>
          <p>
          As there are a limited number of seats available, registration will be
          done on first come first serve basis and will be subject to the payment of the registration fees.
          </p>
        </div>
        <img className='h-80 w-auto' src={Illustration_5} alt="img5" />
    </div>
    <div className='flex flex-col space-y-4 w-1/2 text-[#FBC097]'>
      <p className='text-[#F7F6D4] md:text-2xl sm:text-2l text-xl font-semibold'>Registration Procedure</p>
      <div className='flex flex-col'>
        <p className='font-semibold'>Step 1 : Fill the Online registration form and submit.</p>
        <p>Fill the following registration form and submit.
          You will need to provide a working email id and upload a jpg
          image of your valid student ID card.
        </p>
        <a href="https://forms.gle/6Sbg653frcztYZbv5" className='text-blue-700 underline'  target="_blank" rel="noopener noreferrer">
                Online Registration Link   
        </a>
      </div>
      <div className='flex flex-col'>
        <p className='font-semibold'>Step 2 : Wait for a Confirmation Email from Organizers</p>
        <p>The organizers will send a confirmation email to the interested
          participant with a link for payment of the registration fees.
        </p>
      </div>
      <div className='flex flex-col'>
        <p className='font-semibold'>Step 3 : Pay the Registration Fees</p>
        <p>Deposit the Registration Fees of Rs. 3000 as per the instruction in
          the email and take a screenshot of successful payment screen
          where the Transaction ID is visible.
          Reply to the email with the screenshot for successful payment
          and wait for confirmation from organizers
        </p>
      </div>
      <div className='flex flex-col'>
        <p className='font-semibold'>Step 4 : Physical Registration</p>
        <p>Come to the venue on the first day of the program to verify your
          attendance and receive your registration kit.
          Your registration is now complete and you can attend the workshop
        </p>
      </div>
    </div>
</div>
  );
};

export default Register;

