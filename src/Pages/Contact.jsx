import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {
  return (
    
        <div className='bg-[#0B1A33] flex justify-center items-center flex-col '>
            <div className='w-[80%] h-[80px] mt-[25px]'>
                <p className='text-[27px] font-bold text-[white]' id='contact'>CONTACT ME</p>

            </div>
            <div className=' flex justify-center h-[150px] gap-[20px]' data-aos="zoom-in-up">
             <a href="https://www.linkedin.com/in/attique-ur-rehman-react-js-developer-67b290386/"> <div className='w-[70px] h-[70px] rounded-[35px] bg-[#000000] flex justify-center items-center border-2 border-yellow-400 from-yellow-500 to-yellow-800 shadow-[0_0_90px_rgba(0,0,0,9.9)] hover:shadow-[0_0_40px_rgba(355,355,0,0.7)] transition-shadow duration-300 hover:bg-[#282F61]'><FaLinkedin className='text-[25px] text-[white]'/> </div> </a>

             <a href="https://github.com/"> <div className='w-[70px] h-[70px] rounded-[35px] bg-[#000000] flex justify-center items-center border-2 border-yellow-400 from-yellow-500 to-yellow-800 shadow-[0_0_90px_rgba(0,0,0,9.9)] hover:shadow-[0_0_40px_rgba(355,355,0,0.7)] transition-shadow duration-300 hover:bg-[#282F61]'><FaGithubSquare className='text-[25px] text-[white]'/> </div> </a>

            <a href="mailto:attiqueurrehman202@gmail.com"> <div className='w-[70px] h-[70px] rounded-[35px] bg-[#000000] flex justify-center items-center border-2 border-yellow-400 from-yellow-500 to-yellow-800 shadow-[0_0_90px_rgba(0,0,0,9.9)] hover:shadow-[0_0_40px_rgba(355,355,0,0.7)] ztransition-shadow duration-300 hover:bg-[#282F61]'><SiGmail className='text-[25px] text-[white]'/> </div></a>

            </div>
        </div>
    
  )
}

export default Contact