import React, { useState } from 'react';
import Comp from './Comp';
import Player from './Player';

const Game = () => {
    const [matchnum, addmatch] = useState(0)
    const [compScore, setCompScore] = useState(0)
    const [plyScore, setPlyScore] = useState(0)

    const [plyChoice, setPlyChoice] = useState("")
    const [compChoice, setCompChoice] = useState("")

    const [plyRst, setPlyRst] = useState("")
    const [compRst, setCompRst] = useState("")

    const calWin = () => {

        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const curCompChoice = choices[Math.floor(Math.random() * 4)]
        setCompChoice(curCompChoice);

        const beat = {  "rock": ["scissors", "lizard"],
                        "paper": ["rock", "spock"],
                        "scissors": ["paper", "lizard"],
                        "lizard": ["paper", "spock"],
                        "spock": ["scissors", "rock"]
                    }
            
        if (beat[plyChoice].includes(curCompChoice)) {
            // player win 
            setPlyScore(plyScore+1)
            setCompScore(compScore-1)
            setPlyRst("Win")
            setCompRst("Lose")
        } else if (plyChoice === curCompChoice) {
            // draw
            setPlyRst("Tie")
            setCompRst("Tie")
        } else {
            // computer win
            setPlyScore(plyScore-1)
            setCompScore(compScore+1)
            setPlyRst("Lose")
            setCompRst("Win")
        }

        addmatch(matchnum+1)
    }

    const resetGame = () => {
        setCompRst("")
        setPlyRst("")
        //setCompChoice("")
        setPlyChoice("")
    }

  return (
    <div>
        <div style={{textAlign: 'center'}}>Total Match Played: {matchnum}</div>
        <div className='split left'>
            <Comp compScore={compScore} compChoice={compChoice} compRst={compRst}/>
        </div>
        <div className='split right'>
            <Player plyScore={plyScore} setChoice={setPlyChoice} plyChoice={plyChoice} getWin={calWin} plyRst={plyRst} rst={resetGame}/>
        </div>
    </div>
  )
}

export default Game