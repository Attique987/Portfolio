import React from 'react'

const Experience = () => {
  return (
    <>
    <div className='bg-[#0B1A33] flex justify-center items-center flex-col'>
        <div className=' h-[80px] w-[70%]' id='exper'>
            <p className='text-[27px] text-[white] font-bold'>EXPERIENCE</p>
        </div>
        <div className='bg-[#282F61] flex justify-center md:h-[200px] md:w-[60%] w-[80%] border border-yellow-400 rounded-xl p-8 md:p-12 max-w-4xl shadow-[0_0_40px_rgba(0,255,0,0.3)]  flex-col text-center' data-aos="zoom-in" >
         
            <p className='text-[27px] text-[white] font-bold'>Customer Service Representative</p>
            <p className='text-[green] text-[20px] font-bold flex justify-center items-center gap-2'>
  Sept, 2024 – Jul, 2025,
  <span className='text-[Yellow]'>Rawalpindi, PAKISTAN</span>
</p>
            <p className='text-[yellow] text-[20px] font-bold'>Worked on Med Campaign</p>
            <p className='text-[yellow] text-[20px] font-bold'>Work with Maxfort Bpo</p>

          </div><br /><br />
    
         <div className='bg-[#282F61] flex justify-center md:h-[200px] w-[80%] md:w-[60%] border border-yellow-400 rounded-xl p-8 md:p-12 max-w-4xl shadow-[0_0_40px_rgba(0,255,0,0.3)]  flex-col text-center' data-aos="zoom-in">
         
            <p className='text-[27px] text-[white] font-bold'>Customer Service Representative</p>
            <p className='text-[green] text-[20px] font-bold flex justify-center'>Aug, 2023 Aug, 2024,<p className='text-[Yellow]'> Rawalpindi, PAKISTAN</p></p>
            <p className='text-[yellow] text-[20px] font-bold'>Worked on Aca Campaign</p>
            <p className='text-[yellow] text-[20px] font-bold'>Work with Brave Bpo</p>

          </div>
    </div>
    </>
  )
}

export default Experience