import React from 'react';
import Illustration_2 from '../assets/Illustration_2.svg'
import Illustration_3 from '../assets/Illustration_3.svg'
import Illustration_4 from '../assets/Illustration_4.svg'
import Card from './Card'

const About = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-between bg-[#F7F6D4] py-20 space-y-16'>
    <div className='flex flex-row justify-between px-20'>
        <div className='flex flex-col justify-center space-y-4 pr-40'>
          <p className='text-[#EE4F3B] md:text-2xl sm:text-2l text-xl font-semibold'>About Kanimuni</p>
          <p>
          The word ‘Kanimuni’ is derived from an age-old physical game played in Assam
          and represents the timeless traditions of joyful play in the Indian culture.
          </p>
          <p>
          Kanimuni is an initiative by the Department of Design, Indian Institute of Technology Guwahati under the aegis of Design Innovation Center (DIC) for developing
          physical games for education and learning.
          </p>
          <p>
          Game design is not just about entertainment; it's a dynamic creative process
          that blends art, technology, and psychology to create engaging experiences.
          With Kanimuni we are exploring how games can be used to create an impact on
          education and learning.
          </p>
          <p>
          As part of the Kanimuni initiative, we are conducting the second 10-day immersive workshop on developing physical and board games for education.
          In this edition of the workshop, you'll learn how to craft compelling gameplay experiences through a blend of theory and practical exercises. You will also get to
          observe the testing of some board games and learn how to evaluate the efficacy
          of design and gameplay.
          </p>
          <p>
          Whether you're an educator, designer, or simply passionate about the world of
          games, this workshop offers a unique opportunity to collaborate, innovate, and
          create your very own board games with a purpose.
          </p>
        </div>
        <img className='w-80 h-auto' src={Illustration_2} alt="img2" />
    </div>
    <div className='flex flex-row justify-between px-12 space-x-10'>
      <Card image={Illustration_3} title='Who Should Attend?' desc='The Kanimuni workshop is tailored 
        primarily for undergraduate and postgraduate students in design. Current students from any
        design schools India can attend the 10-day workshop. Participants will have to be on IITG campus for attending
        the workshop and will be provided accommodation (on paid basis) in IITG Student hostels on request. 
        We will also invite select school students (from Class 8 onwards) who share an interest in the art of game design 
        to help test the games as they are being designed by the participants of the workshop. These school children will 
        also participate in short introduction to game design.' />
        <Card image={Illustration_4} title='Why Should You Attend?' desc='At Kanimuni, you’ll gain a unique hands on learning experience
        which will take you through the process of game design. The
        focus will be on creating physical and board games with a special
        emphasis on education for children.
        The workshop is tailor-made for design students and will take
        them through the various stages of game design - from ideation
        to prototyping, playtesting, and final execution. Participants will
        gain a comprehensive understanding of the game design process, empowering them to create their own engaging and educational gaming experiences.
        In addition, the workshop may help you enhance your game
        design skills, collaborate with experts, build connections with
        fellow students and help enhance your design portfolio.
        Participants will also receive certificates of participations signed
        by the workshop organizers and endorsed by the PI of Design Innovation Center, Department of Design, IIT Guwahati.' />
    </div>
</div>
  );
};

export default About;


