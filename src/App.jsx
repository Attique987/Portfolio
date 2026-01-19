import React,{useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Pages/Nav'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

const App = () => {
  useEffect (()=>{
  AOS.init({
    duration:2000,
    offset:100,
    once:false
  })
})
  return (
    <div>
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App