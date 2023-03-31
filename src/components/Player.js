import React, { useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from 'react-webcam';
import * as fp from "fingerpose";

import rockGesture from '../poses/rock';
import paperGesture from '../poses/paper';
import scissorsGesture from '../poses/scissors';
import lizardGesture from '../poses/lizard';
import spockGesture from '../poses/spock';

function Player({plyScore, setChoice, plyChoice, getWin, plyRst, rst}) {

    const webcamRef = useRef(null);

    const runHandpose = async () => {
        const model = await handpose.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(model);
        }, 10);

    };

    const detect = async (model) => {
        // Check data is available
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ) {
            // // Get Video Properties
            const video = webcamRef.current.video;
    
            // Make Detections
            const hand = await model.estimateHands(video);

    
            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    rockGesture,
                    paperGesture,
                    scissorsGesture,
                    lizardGesture,
                    spockGesture
                ]);

                const gesture = await GE.estimate(hand[0].landmarks, 8.5);

                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    //set user choice
                    setChoice(gesture.gestures[0]["name"])
                }
            }

        }
      };
    
      useEffect(()=>{runHandpose()},[]);

  return (
    <div className='player'>
        <h3 className='cptxt'>YOUR SCORE: {plyScore}</h3>
        <div className='cptxt'>Show Your Choice To the Camera !</div>
        <Webcam className='webcam' ref={webcamRef} />
        <div>{plyChoice === "" ? (
                <h3 className='cptxt'>- Your Choice is: _____ -</h3>) : (
                <h3 className='cptxt'>- Your Choice is: {plyChoice} -</h3>)
            }
        </div>
        <div>{plyRst === "" ? (
                <div>
                    <button onClick={getWin}>Confirm Choice</button>
                </div>
            ): (<div>
                    <h4>You {plyRst}</h4>
                    <button onClick={rst}>Play Again</button>
                </div>) 
            }</div>
    </div>
  )
}

export default Player