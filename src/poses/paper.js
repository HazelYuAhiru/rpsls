import * as fp from "fingerpose";

const paperGesture = new fp.GestureDescription('paper');

for(let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    paperGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    paperGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    paperGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.4);
    paperGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.4);
  }

export default paperGesture;