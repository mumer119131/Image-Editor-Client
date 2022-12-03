import axios from 'axios'
import React,{useContext, useState, useEffect} from 'react'
import { LoadingContext } from '../../App'
import FileBrowser from '../FileBrowser/FileBrowser'
import ImagesPreview from '../ImagesPreview/ImagesPreview'
import DownloadBtn from '../DownloadBtn/DownloadBtn'
import {BiError} from 'react-icons/bi'
import { BsFileExcel } from 'react-icons/bs'
const Composite = () => {
    const [imageFile, setimageFile] = useState(undefined)
    const [imageBase64, setImageBase64] = useState("")
    const [outputImage, setOutputImage] = useState("")  
    const {setIsLoading, isLoading} = useContext(LoadingContext)
    const [secondImage, setSecondImage] = useState("")
    const [secondImageBase64, setSecondImageBase64] = useState("")
    const [error, setError] = useState("")
    useEffect(()=>{
        if (imageFile && secondImage){
          setOutputImage(undefined)
          getBase64(imageFile).then(result =>{
            setImageBase64(result)
          }).catch((error)=> console.log(error))
          getBase64(secondImage).then(result =>{
            setSecondImageBase64(result)
          }).catch((error)=> console.log(error))
        }
    
      }, [imageFile, secondImage])
    
      const getBase64 = (image) => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(image);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
      };
    
      const uploadImage = async() =>{
        if (imageFile && secondImage){
            setIsLoading(true)
            setError("")
            try{
              var response = await axios.post("https://imageedit-mumer119131.vercel.app", {
                "base64" : imageBase64,
                "imageType" : imageFile["type"],
                "editFunction" : "composite",
                "secondImage" : secondImageBase64
            })
            }catch{
              setError(" Image doesn't match image must be of same size and color mode.")
              setIsLoading(false)
              return
            }
            setIsLoading(false)
            setOutputImage(response["data"])
          }
      }
  return (
    <div className='uploader__section' style={{filter : isLoading ? "blur(8px)" : ""}}>
        <h2><span>Composite</span> Tool</h2>
        {error ? <p className='error'><BiError />{error}</p> : null }
        <ImagesPreview imageBase64 = {imageBase64} outputImage = {outputImage} />
        <FileBrowser setimageFile = {setimageFile} />
        <p>Second Image</p>
        <FileBrowser setimageFile = {setSecondImage} />
        {outputImage && secondImage ? <DownloadBtn outputImage={outputImage} fileName={imageFile["name"]}/> : null}
        <button onClick={uploadImage} disabled={imageFile ? false : true} >Upload</button>
    </div>
  )
}

export default Composite