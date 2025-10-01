import React from 'react'
import './Title.css'

const Title = ({sub,title}) => {
  return (
    <div className='title'>
        <p>{sub}</p>
        <h2>{title}</h2>
      
    </div>
  )
}

export default Title
