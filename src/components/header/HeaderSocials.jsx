import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



export const HeaderSocials = () => {

  return (

    <div className='header__socials'>

        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Muntake" target="_blank"> <FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials
