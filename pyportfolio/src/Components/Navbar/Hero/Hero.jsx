import React from 'react'
import './Hero.css'
// import profile_img from '../../../assets/profile_img.svg'
import pankaj_profile from '../../../assets/pankaj_profile.jpg'

function Hero() {
  return (
    <div className='hero'>
        {/* <img src={profile_img} alt="" /> */}
        <img src={pankaj_profile} alt="" />
        <h1>I'm Pankaj Yadav, frontend developer based in INDIA.</h1>
        <p>I am a frontend developer from Noida. India with 2 year of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero


// 25 minute pe ruk diya tha 