import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{
        color: 'white',
        width: '300px',
        border: '1px solid orange',
        backgroundColor: 'orange',
        margin: '10px 0px',
        borderRadius: '5px',
        textTransform: 'uppercase'
    }}>
        {children}
    </div>
  )
}

export default ErrorMessage