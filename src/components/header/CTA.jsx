import React from 'react'
import CV from '../../assets/Muntake_RES.pdf'

const CTA = () => {
//setup jsx for the buttons for both the download and contact , contact will take us down the page by refrence of #contact
  return (

    <div className="cta">
        <a href={CV}download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>

    </div>
  )
}

export default CTA