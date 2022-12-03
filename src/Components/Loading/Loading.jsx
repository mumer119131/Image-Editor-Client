import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { LoadingContext } from '../../App'
import './loading.scss'

const Loading = () => {

    const isLoading = useContext(LoadingContext)
  return (
    <div className="loading">
        {isLoading ? <div className='shapes'></div> : null}
    </div>
  )
}

export default Loading