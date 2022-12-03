import React from 'react'
import {BsImage} from "react-icons/bs"


const FileBrowser = (props) => {
  const {setimageFile} = props
  return (
    <label className='custom__file__upload'>
          <input type="file" accept='image/*' onChange={(e) => setimageFile(e.target.files[0])}/>
          <BsImage /> Browse...
        </label>
  )
}

export default FileBrowser