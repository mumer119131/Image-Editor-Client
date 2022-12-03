import React from 'react'
import { BsCloudDownloadFill } from 'react-icons/bs'
const DownloadBtn = (props) => {

    const {outputImage, fileName} = props
  return (
    
        <a href={outputImage} download={"edt_"+fileName}><BsCloudDownloadFill/> Dowload</a>
    
  )
}

export default DownloadBtn