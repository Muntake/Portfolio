import React from 'react'
import './header.css'
import CTA from './CTA'
import my_pic from '../../assets/mee.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   
  //setup of the header section
  //including title, icons , picture and button for cv and lets talk 
   <header>

    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Muntake Lali</h1>
      <h5 className="text-light"> Software Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={my_pic} alt="my_pic" />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    
  
    </div>
      

    </header>
  )
}

export default Header