import * as fp from "fingerpose";

const lizardGesture = new fp.GestureDescription('lizard');

//thumb
lizardGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
lizardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
lizardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);

for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    lizardGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.8);
    lizardGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    lizardGesture.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
    lizardGesture.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
  }


export default lizardGesture;