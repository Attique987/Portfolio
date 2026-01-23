import React from 'react'
import Htm from '../assets/html.png'
import Css from '../assets/css.png'
import Java from '../assets/javascript.png'
import Reac from '../assets/react.png'
import Nod from '../assets/node.png'
import Git from '../assets/unnamed.png'
import { SiTailwindcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <div className='bg-[#0B1A33] flex justify-center items-center flex-col'>
        <div className=' h-[80px] w-[70%] mt-[35px]' id='skill'>
            <p className='text-[white] text-[27px] font-bold'>Skills</p>
        </div>
        <div className=' flex justify-center items-center gap-[30px] flex-wrap md:w-[60%] w-[80%]'>

        
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Htm} alt="" />
            <p className='text-[white] text-[20px] font-bold'>HTML</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Css} alt="" />
            <p className='text-[white] text-[20px] font-bold'>CSS</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Java} alt=""  className='w-[26%]'/>
            <p className='text-[white] text-[20px] font-bold'>JavaScript</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Reac} alt="" />
            <p className='text-[white] text-[20px] font-bold'>React.Js</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Nod} alt="" />
            <p className='text-[white] text-[20px] font-bold'>Node.Js</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <img src={Git} alt="" className='w-[25%]'/>
            <p className='text-[white] text-[20px] font-bold'>Git Hub</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <SiTailwindcss className='text-[80px] text-[#36B7F0]'/>
            <p className='text-[white] text-[20px] font-bold'>Tailwind</p>
        </div>
        <div className='bg-black border border-yellow-400 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0_0_40px_gba(0,255,0,0.4)] hover:scale-105 transition-transform duration-300 md:w-[40%] w-[80%]' data-aos="flip-left">
            <SiNetlify className='text-[80px] text-[#05B7B4]'/>
            <p className='text-[white] text-[20px] font-bold'>Netlify</p>
        </div>
        </div>
    </div>
  )
}

export default Skills