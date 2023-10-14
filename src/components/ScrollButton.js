import React, {useState} from 'react'; 
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 800){ 
	setVisible(true) 
	} 
	else if (scrolled <= 800){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return (
    visible && 
	<button className='fixed bottom-5 right-7 z-50 cursor-pointer p-4 bg-opacity-50 bg-slate-300 rounded-md' onClick={scrollToTop}> 
	<AiOutlineArrowUp /> 
	</button> 
); 
} 

export default ScrollButton; 
