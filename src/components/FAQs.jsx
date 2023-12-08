import React from 'react';
import Illustration_6 from '../assets/Illustration_6.svg'

const FAQs = () => {
  return (
    <div className='w-full flex flex-col justify-between bg-[#F7F6D4] md:px-20 sm:px-20 md:pb-20 sm:pb-20 md:space-y-20 sm:space-y-20 space-y-10 md:pt-20 sm:pt-20 pt-10'>
        <div className='flex md:flex-row sm:flex-row flex-col w-full justify-between md:space-x-20 sm:space-x-20 md:space-y-0 sm:space-y-0 space-y-10'>
            <div className='flex md:flex-col sm:flex-col md:w-1/2 sm:w-1/2 flex-row md:justify-start sm:justify-start w-fit px-8'>
                <div className='flex flex-col text-black space-y-4'>
                    <div className='flex flex-row justify-center w-fit items-center md:space-x-10 sm:space-x-10 space-x-4 md:mb-5 sm:mb-5 mb-2'>
                        <img className='md:h-20 sm:h-20 h-10 w-auto' src={Illustration_6} alt="img6" />
                        <p className='text-[#EE4F3B] md:text-2xl sm:text-2l text-xl font-semibold'>FAQs</p>
                    </div>
                    <p className='font-semibold'>1. I am not a design student. Can I attend?</p>
                    <p>No, this workshop is specifically designed for students pursuing a design-related field.</p>
                    <p className='font-semibold'>2. I am a PhD scholar. Can I attend?</p>
                    <p>Yes, PhD scholars with a background in design or related fields are welcome to attend the workshop. We encourage participants from diverse educational backgrounds who have a genuine interest in game design for education.</p>
                    <p className='font-semibold'>3. I am from the industry. Can I attend?</p>
                    <p>No, this workshop is primarily intended for students and scholars in design-related fields. It is not designed for industry professionals.</p>
                    <p className='font-semibold'>4. Where should I pay the registration Fees?</p>
                    <p>Once registered, you will receive a confirmation email containing all the necessary details regarding the registration fees, payment instructions, and any additional information you may require to prepare for the workshop.</p>
                    <p className='font-semibold'>5. Can I pay when I get there?</p>
                    <p>No, unfortunately, we cannot accept on-site payments. To ensure the smooth organization of the workshop and secure your spot, we require all participants to complete their registration and pay online in advance. Please make sure to complete your payment within the specified timeframe to secure your seat.</p>
                    <p className='font-semibold'>6. Do I need anything for the workshop? </p>
                    <p>Yes, for the workshop, please bring the following items: 
                        <ul className='pl-4'>
                            <li className='list-disc'>
                            Laptop: You will need a laptop for various activities and exercises during the workshop. 
                            </li>
                            <li className='list-disc'>
                            Student ID: Please bring a form of student ID for registration purposes.
                            </li>
                        </ul>
                    </p>
                    <p className='font-semibold'>7. What am I getting for ₹ 3000? </p>
                    <p>Your registration fee of ₹ 3000 includes the following:  
                    <ul className='pl-4'>
                            <li className='list-disc'>
                            Workshop Access: You will have full access to Kanimuni: A Workshop on Game Design for Education, which includes instructional sessions and hands-on activities.  
                            </li>
                            <li className='list-disc'>
                            Materials and Resources: We will provide workshop materials and resources necessary for the activities along with the Kanimuni kit.
                            </li>
                            <li className='list-disc'>
                            Certificate of Participation: Upon completing the workshop, you will receive a certificate to acknowledge your participation. 
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:w-1/2 sm:w-1/2 md:justify-start sm:justify-start w-fit px-8 justify-center'>
                <div className='flex flex-col text-black space-y-4'>
                <p className='font-semibold -mt-5'>8. What is the schedule for the workshop?</p>
                    <p>The workshop schedule, including session timings and topics, will be provided to registered participants closer to the event date. Keep an eye on your email for updates.</p>
                    <p className='font-semibold'>9. Are there any prerequisites for attending the workshop?</p>
                    <p>There are no specific prerequisites for attending the workshop. However, having a basic understanding of design concepts or educational games may be beneficial.</p>
                    <p className='font-semibold'>10. Will there be any assignments or assessments during the workshop?</p>
                    <p>Yes, there may be hands-on assignments and group activities as part of the workshop. These are designed to reinforce learning and practical application.</p>
                    <p className='font-semibold'>11. Is there any preparation required before the workshop?</p>
                    <p>We recommend that participants come prepared with an open mind, a willingness to learn, and any required materials, as mentioned in the earlier response.</p>
                    <p className='font-semibold'>12. Will meals be provided during the workshop? </p>
                    <p>Lunch and snacks will be provided to all workshop participants during the event. Participants staying in the hostel can avail dinner from the hostel mess on a paid basis. </p>
                    <p className='font-semibold'>13. Can I cancel my registration and get a refund? </p>
                    <p>Refund policies may vary and will be outlined in the workshop registration information. Please review the registration details for our cancellation and refund policy. </p>
                    <p className='font-semibold'>14. Is there any accommodation provided for out-of-town participants? </p>
                    <p>Yes, we offer hostel accommodation options at an additional cost. Details about accommodation, including pricing and availability, will be provided upon request or during registration. </p>
                    <p className='font-semibold'>15. How can I stay updated on workshop announcements and changes? </p>
                    <p>We will communicate important updates and announcements via email, so please ensure the email address you provided during registration is accurate. You can also check our website and social media channels for updates.  </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FAQs;



