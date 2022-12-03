import React from 'react'

const ImagesPreview = (props) => {

    const {imageBase64, outputImage} = props
  return (
    <div className='images__container'>
          {imageBase64 ? <img src={imageBase64}/> : <div>Select Image</div>}
          {outputImage ? <img src={outputImage}/> : null}
    </div>
  )
}

export default ImagesPreview