import React from 'react'
import './Result.css'

const Resut = ({name, score}) => {
  return (
    <div className='result'>
      <h1 style={{position: 'relative', textAlign:'center'}}>Name: {name}</h1>
      <h1 style={{position: 'relative', textAlign:'center'}}>Your score is: {score}</h1>
    </div>
  )
}

export default Resut