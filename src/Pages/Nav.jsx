import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-[#0B1A33] flex justify-between items-center px-6 py-4 text-white relative">
    
      <div className="text-[22px] font-bold">Portfolio</div>

      {/* Burger Icon (mobile) */}
      <CiMenuBurger
        className="text-3xl md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Nav Links */}
      <div
        className={`list-none text-[18px] font-semibold 
          ${showMenu ? 'flex' : 'hidden'}
          absolute top-[60px] left-0 w-full bg-[#0B1A33] flex-col items-center gap-4 py-4
          md:flex md:static md:flex-row md:w-auto md:bg-transparent md:gap-10 transition-all duration-500`}
      >
        <li className="cursor-pointer hover:text-yellow-400"><a href="#about">Home</a></li>
        <li className="cursor-pointer hover:text-yellow-400"><a href="#exper">Experience</a></li>
        <li className="cursor-pointer hover:text-yellow-400"><a href="#skill">Skills</a></li>
        <li className="cursor-pointer hover:text-yellow-400"><a href="#project">Projects</a></li>
        <li className="cursor-pointer hover:text-yellow-400"><a href="#contact">Contact</a></li>
      </div>
    </nav>
  );
};

export default Nav;
