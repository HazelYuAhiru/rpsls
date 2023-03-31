import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Rules from './Rules'

const Header = () => {
    const [showRules, setShowRules] = useState(false);

    const toggleRules = () => {
        setShowRules(!showRules);
    };

  return (
    <div>
        <div className='header'>
            <h1>Rock Paper Scissors ... Lizard Spock !</h1>
            <Popup trigger={<button className='rulesbtn' onClick={toggleRules}>Rules</button>} modal nested>{<Rules />}</Popup>
        </div>
        
    </div>
  )
}

export default Header