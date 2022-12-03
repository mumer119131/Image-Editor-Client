import React from 'react'
import { Link } from 'react-router-dom'
import "./tools.scss"

const toolsList = {
  "Blur" : {
    "to" : '/'
  },
  "Embossing" : {
    "to" : '/embossing'
  },
  "Reduce Image Size" : {
    "to" : '/reduceSize'
  },
  "GrayScale" : {
    "to" : '/grayScale'
  },
  "Rotate" : {
    "to" : '/rotate'
  },
  "Sharpen" : {
    "to" : '/sharpen'
  },
  "Smooth" : {
    "to" : '/smooth'
  },
  "Detail Enhancer" : {
    "to" : '/detailEnhancer'
  },
  "Sketch" : {
    "to" : '/sketch'
  },
  "Composite" : {
    "to" : '/composite'
  },
}

const Tools = () => {
  return (
    <div className='tools__section'>
      
        {Object.keys(toolsList).map((tool, index)=>{
          return (
            <Link to={toolsList[tool]["to"]} key={index}>{tool}</Link>
          )
        })}
    </div>
  )
}

export default Tools