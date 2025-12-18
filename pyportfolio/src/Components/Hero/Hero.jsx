import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import profile_img from '../../../assets/profile_img.svg'
import pankaj_profile from '../../assets/pankaj_profile.jpg'

function Hero() {
  return (
    <div id='home' className='hero'>
        {/* <img src={profile_img} alt="" /> */}
        <img src={pankaj_profile} alt="" />
        <h1><span>I'm Pankaj Yadav,</span> frontend developer based in INDIA.</h1>
        <p>I am a frontend developer from Noida. India with 2 year of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero


