import React, { useEffect, useRef } from 'react';
import Ber from '../assets/bero.avif';
import Resum from '../pdf/Resume.pdf';
import Typed from 'typed.js';

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Attique-ur-Rehman",
        "I'm Front End Developer",
        "React.Js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <div className='bg-[#0B1A33] flex justify-center md:justify-around items-center md:gap-30 flex-col md:flex-row' id='about'>
      <div className='h-[350px] w-[80%] md:w-[50%] text-[17px] font-bold from-green-700 to-green-900'>
        <div className='mt-[70px] border border-yellow-400 rounded-xl bg-[#2a2f66] text-center p-10 shadow-[0_0_40px_rgba(0,255,0,0.4)] transition-shadow duration-300'>
          <p className='text-[25px] text-white'>
            <span ref={typedRef}></span>
          </p>
          <button className='border border-yellow-400 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 hover:text-[#2a2f66] transition-all duration-300
 text-[#da9d1c]'><a href={Resum} download='Resume.pdf'>Download Resume</a></button>

        </div>
      </div>
      <div className='home h-[250px] w-[250px]'>
        <img src={Ber} alt="" className='h-[250px] w-[250px] rounded-[125px] border-4 border-yellow-00'/>

      </div>
    </div>
  );
};

export default About;
