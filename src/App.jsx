import { createContext } from 'react'
import { useState } from 'react'
import './App.scss'
import Hero from './Components/Hero/Hero'
import Loading from './Components/Loading/Loading'
import Navbar from './Components/Navbar/Navbar'
import Uploader from './Components/Blur/Blur'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Embossing from './Components/Embossing/Embossing'
import Tools from './Components/Tools/Tools'
import ReduceSize from './Components/ReduceSize/ReduceSize'
import GrayScale from './Components/GrayScale/GrayScale'
import Rotate from './Components/Rotate/Rotate'
import Sharpen from './Components/Sharpen/Sharpen'
import Smooth from './Components/Smooth/Smooth'
import DetailEnhacner from './Components/DetailEnhancer/DetailEnhacner'
import Sketch from './Components/Sketch/Sketch'
import Composite from './Components/Composite/Composite'
const LoadingContext = createContext(null)
function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>

      <BrowserRouter>
        <LoadingContext.Provider value={isLoading}>
          <Loading />
        </LoadingContext.Provider>
        <Navbar />
        <Hero />
        <Tools />
      <Routes>
        <Route path='/' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Uploader />
              </LoadingContext.Provider>} />
        <Route path='/reduceSize' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <ReduceSize />
              </LoadingContext.Provider>} />
        <Route path='/grayScale' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <GrayScale />
              </LoadingContext.Provider>} />
        <Route path='/rotate' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Rotate />
              </LoadingContext.Provider>} />
        <Route path='/sharpen' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Sharpen />
              </LoadingContext.Provider>} />
        <Route path='/smooth' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Smooth />
              </LoadingContext.Provider>} />
        <Route path='/detailEnhancer' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <DetailEnhacner />
              </LoadingContext.Provider>} />
        <Route path='/sketch' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Sketch />
              </LoadingContext.Provider>} />
        <Route path='/composite' element={
              <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
                <Composite />
              </LoadingContext.Provider>} />
        <Route path='/embossing' element={
          <LoadingContext.Provider value={{"setIsLoading" : setIsLoading, "isLoading" : isLoading}}>
            <Embossing />
        </LoadingContext.Provider>}
            />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export { LoadingContext }
export default App
