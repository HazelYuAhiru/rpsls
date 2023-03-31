import * as fp from "fingerpose";

const scissorsGesture = new fp.GestureDescription('scissors');

// thumb:
scissorsGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.6);

// index:
scissorsGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
scissorsGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
scissorsGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.8);
scissorsGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.8);
scissorsGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.6);
scissorsGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.6);

// middle:
scissorsGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
scissorsGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
scissorsGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);
scissorsGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.8);
scissorsGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 0.4);
scissorsGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 0.4);

// ring:
scissorsGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

// pinky:
scissorsGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


export default scissorsGesture;