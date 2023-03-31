import * as fp from "fingerpose";

const rockGesture = new fp.GestureDescription('rock');

for(let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    rockGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.8);
    rockGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    rockGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.7);
    rockGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.7);
  }

export default rockGesture;