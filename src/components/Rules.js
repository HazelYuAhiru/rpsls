import React from 'react'
import rules from '../img/rules.png'

const Rules = () => {
  return (
    <div className='rules'>
        <img  src={rules} alt='rule' resizeMode='contain' style={{height: 300, width: 300}}/>
        <div>-Click space to go back-</div>
    </div>
  )
}

export default Rules