import React from 'react'
import Her from '../assets/hero.png'
import Stu from '../assets/stup.webp'

const Project = () => {
  return (
    <div className='bg-[#0B1A33] flex justify-center items-center flex-col'>
        <div className=' w-[70%] h-[80px] text-[27px] text-[white] font-bold mt-[20px]' >PROJECTS</div>
        <div className='flex justify-center items-center flex-wrap gap-[20px] w-[70%]' id='project'>
            <div className='bg-[#1c1f2e] border border-yellow-400 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:scale-105 transition-transform duration-300 md:w-[35%] w-[85%] h-[400px] flex flex-wrap justify-center items-center' data-aos="flip-left">
              <div className='bg-[blue] w-[80%] border-2 border-yellow-400'>
              <img src={Her} alt="" className='h-[250px]'/>
              </div>
              <p className='text-[white] text-center w-[80%]'>This is a project made with complete HTMl and CSS</p>
               <button className='bg-[blue] w-[23%] text-[white] rounded-[5px] h-[25px]'> <a href="https://lambent-mermaid-bedf3a.netlify.app/#main1">Demo</a> </button>
              
              </div>
            <div className='bg-[#1c1f2e] border border-yellow-400 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:scale-105 transition-transform duration-300 md:w-[35%] w-[85%] md:h-[400px]  flex flex-wrap justify-center items-center p-3' data-aos="flip-left">
              <div className='w-[90%] md:w-[80%] border-2 border-yellow-400'>
              <img src={Stu} alt="" className=' md:w-[242px] w-[100%] h-[250px]'/>
    
              </div>
                    <p className='text-[white] text-center w-[80%] mt-[13px]'>This is a project made with complete React js.</p>
                    <button className='bg-[blue] w-[23%] text-[white] rounded-[5px] h-[25px] mt-[10px]'> <a href="https://geekanite123.netlify.app/">Demo</a> </button>
                    
            </div>
        </div>
    </div>
  )
}

export default Project