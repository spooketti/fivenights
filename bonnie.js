let bonnieInterval = window.setInterval(bonnieMovement,4970)
let bonnieAI = 0;
let bonnieProgress = 0;
/*
let runningSound = new Audio("assets/sounds/Run.ogg")
let shortBang = new Audio("assets/sounds/foxy_knock_long_false.wav")
let longBang = new Audio("assets/sounds/foxy_knock_long_true.ogg")
let bangArray = [shortBang,longBang,3000,7000]

show stage + dining + backstage + left hall + closet left corner doorway office
*/
function bonnieMovement()
{
let bonnieCamDict = 
{
    "ONEA":0,
    "ONEB":1,
    "FIVE":2,
    "TWOA":3,
    "CAM3":4,
    "TWOB":5
}
let chance = Math.round(Math.random() * 20 + 1)
if(bonnieAI<chance)
{
    return;
}

 if(bonnieCamDict[currentCamera]==bonnieProgress&&cameraOpen)
 {
    scramble.play()
    changeCamera(currentCamera)
 }
   
//console.log(chance)
switch(bonnieProgress)
{
    case 6:
        if(leftDoorClosed)
        {
            bonnieProgress = Math.round(Math.random() + 1)
            return;
        }
        bonnieProgress=7
    break;
    case 7:
        if(cameraOpen&&!blackOut)
        {
            activationAnimation()
        }
    break;
    default:
        bonnieProgress++
        if(bonnieProgress < 5)
        {
            bonnieProgress+= Math.floor(Math.random()*2)
        }
    break;
}

if(bonnieCamDict[currentCamera]==bonnieProgress&&cameraOpen)
 {
    changeCamera(currentCamera)
 }


//console.log(bonnieProgress)
}

