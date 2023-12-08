import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-carousel-minimal';
import Illustration_3 from '../assets/Illustration_3.svg'
import Illustration_4 from '../assets/Illustration_4.svg'
import pic1 from '../assets/day1/pic1.jpg'
import pic2 from '../assets/day1/pic2.jpg'
import pic3 from '../assets/day1/pic3.jpg'
import pic4 from '../assets/day1/pic4.jpg'
import pic5 from '../assets/day1/pic5.jpg'
import pic6 from '../assets/day1/pic6.jpg'
import pic7 from '../assets/day1/pic7.jpg'
import pic8 from '../assets/day1/pic8.jpg'

const captionStyle = {
  fontSize: '1em',
  fontWeight: 'semibold',
}
const slideNumberStyle = {
  fontSize: '16px',
  fontWeight: 'semibold',
}
const data = [
  {
    image: pic1,
    caption: "Day 1"
  },
  {
    image: pic2,
    caption: "Day 1"
  },
  {
    image: pic3,
    caption: "Day 1"
  },
  {
    image: pic4,
    caption: "Day 1"
  },
  {
    image: pic5,
    caption: "Day 1"
  },
  {
    image: pic6,
    caption: "Day 1"
  },
  {
    image: pic7,
    caption: "Day 1"
  },
  {
    image: pic8,
    caption: "Day 1"
  },
  
];

const Gallery = () => {

  return (
    <div className='w-full h-auto bg-[#EE4F3B] flex flex-col items-center md:space-y-12 sm:space-y-12 space-y-6 md:py-16 sm:py-16 py-6'>
       <div className='flex flex-row justify-center w-fit items-center md:space-x-10 sm:space-x-10 space-x-2'>
            <img className='md:h-20 sm:h-20 h-8 w-auto' src={Illustration_3} alt="img8" />
            <p className='text-[#F7F6D4] md:text-2xl sm:text-2l text-xl font-semibold'>Gallery</p>
            <img className='md:h-20 sm:h-20 h-8 w-auto' src={Illustration_4} alt="img9" />
        </div>
        <div
          style={{
            padding: "0 20px",
          }}
        >
       <Carousel
            data={data}
            time={3000}
            width={window.innerWidth*0.6}
            height="auto"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="130px"
            style={{
              textAlign: "center",
            }}
          />
          </div>
    </div>
  );
};

export default Gallery;
