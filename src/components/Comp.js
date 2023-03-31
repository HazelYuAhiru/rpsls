import React from 'react';

import rock from '../img/Rock.svg';
import paper from '../img/Paper.svg';
import scissors from '../img/Scissors.svg';
import lizard from '../img/Lizard.svg';
import spock from '../img/Spock.svg';
import qm from '../img/qm.svg';

const Comp = ({compScore, compChoice, compRst}) => {

    const images = { "rock": rock, 
                    "paper": paper,
                    "scissors": scissors,
                    "lizard": lizard,
                    "spock": spock,
                    "": qm
                };

  return (
    <div>
        <h3 className='cptxt'>COMPUTER SCORE: {compScore}</h3>
        <img className='compimg' src={images[compChoice]} />
        <div className='cptxt'>-Computer's Choice is: {compChoice} -</div>
        <div className='cptxt'>{ compRst !== "" && (<h4>computer {compRst}</h4>) }</div>
    </div>
  )
}

export default Comp