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
import pic21 from '../assets/day2/21.jpg'
import pic22 from '../assets/day2/22.jpg'
import pic23 from '../assets/day2/23.jpg'
import pic24 from '../assets/day2/24.jpg'
import pic25 from '../assets/day2/25.jpg'
import pic26 from '../assets/day2/26.jpg'
import pic27 from '../assets/day2/27.jpg'
import pic28 from '../assets/day2/28.jpg'
import pic29 from '../assets/day2/29.jpg'
import pic210 from '../assets/day2/210.jpg'
import pic31 from '../assets/day3/31.jpg'
import pic32 from '../assets/day3/32.jpg'
import pic33 from '../assets/day3/33.jpg'
import pic41 from '../assets/day4/1.jpg'
import pic42 from '../assets/day4/2.jpg'
import pic43 from '../assets/day4/3.jpg'
import pic46 from '../assets/day4/6.jpg'
import pic47 from '../assets/day4/7.jpg'
import pic48 from '../assets/day4/8.jpg'
import pic49 from '../assets/day4/9.jpg'
import pic410 from '../assets/day4/10.jpg'
import pic411 from '../assets/day4/11.jpg'
import pic412 from '../assets/day4/12.jpg'
import pic413 from '../assets/day4/13.jpg'
import pic414 from '../assets/day4/14.jpg'
import pic415 from '../assets/day4/15.jpg'
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
  },
  {
    image: pic2,
  },
  {
    image: pic3,
  },
  {
    image: pic4,
  },
  {
    image: pic5,
  },
  {
    image: pic6,
  },
  {
    image: pic7,
  },
  {
    image: pic8,
  },
  {
    image: pic21,
  },
  {
    image: pic22,
  },
  {
    image: pic23,
  },
  {
    image: pic24,
  },
  {
    image: pic25,
  },
  {
    image: pic26,
  },
  {
    image: pic27,
  },
  {
    image: pic28,
  },
  {
    image: pic29,
  },
  {
    image: pic210,
  },
  {
    image: pic31,
  },
  {
    image: pic32,
  },
  {
    image: pic33,
  },
  {
    image: pic41,
  },
  {
    image: pic42,
  },
  {
    image: pic43,
  },
  {
    image: pic46,
  },
  {
    image: pic47,
  },
  {
    image: pic48,
  },
  {
    image: pic49,
  },
  {
    image: pic410,
  },
  {
    image: pic411,
  },
  {
    image: pic412,
  },
  {
    image: pic413,
  },
  {
    image: pic414,
  },
  {
    image: pic415,
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
