import * as fp from "fingerpose";

const spockGesture = new fp.GestureDescription('spock');

// thumb:
spockGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
spockGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.9);
spockGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);
spockGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);

// index:
spockGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
spockGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
spockGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

// middle:
spockGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
spockGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
spockGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);

// ring:
spockGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
spockGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0);
spockGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1.0);

// pinky:
spockGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
spockGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
spockGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);


export default spockGesture;