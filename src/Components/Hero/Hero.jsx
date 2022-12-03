import React from 'react'
import './hero.scss'
import {BsImageAlt} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='hero__section'>
        <h1><BsImageAlt/> Edit Pro</h1>
        <p>Start <span>editing</span> your images like a <span>Pro</span></p>
    </div>
  )
}

export default Hero