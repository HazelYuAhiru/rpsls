import React from 'react'

const Start = ({onstart}) => {
  return (
    <div className='start hang-on-hover'>
        <button onClick={onstart} > Click to Start</button>
    </div>
  )
}

export default Start