let foxyInterval = window.setInterval(foxyMovement,5000)
let foxyAI = 0;
let foxyProgress = 0;
let stunned = false
let runningSound = new Audio("assets/sounds/Run.ogg")
let shortBang = new Audio("assets/sounds/foxy_knock_long_false.wav")
let longBang = new Audio("assets/sounds/foxy_knock_long_true.ogg")
let bangArray = [shortBang,longBang,3000,7000]
let earlyReveal = false
let isRunning = false
let foxyIsAtDoor = false
let foxyPowerPenalty = -4
function foxyMovement()
{
let chance = Math.floor(Math.random() * 20 + 1)

if(foxyAI >= chance && cameraOpen == false && stunned == false && foxyProgress != 3)
{
foxyProgress++
//console.log("moved")
if(foxyProgress==3)
{
foxySprint()
}
}



}

const stunFoxy = async () =>
{
    stunned = true
    await delay(Math.floor(Math.random() * 10000))
    stunned = false
}

const foxySprint = async () =>
{
   // console.log("countdown began")
    await delay(10000)
    if(!earlyReveal)
    {
        foxyAttack()
    }
    //console.log("bruh")
    
}

const foxyAttack = async() =>
{
    if(isRunning)
    {
        return
    }
    isRunning = true
    runningSound.play()
    foxyPowerPenalty+=5
   // console.log(foxyPowerPenalty)
    await delay(2000)
    if(leftDoorClosed == false)
    {
        office.style.backgroundImage = "url(assets/jumpscares/foxyJPSC.webp)"
        leftDoorPanel.style.display = "none"
        leftDoorModel.style.display = "none"
        rightDoorPanel.style.display = "none"
        usage = 0
        jumpScream.play()
        callDeath()
    }
    else
    {
        power-=foxyPowerPenalty
        foxyIsAtDoor = true
        let choice = Math.floor(Math.random() * 2)
        bangArray[choice].play()
        await delay(bangArray[choice+2])
      //  console.log("left")
        foxyIsAtDoor = false
        foxyProgress = 0
        isRunning = false
    }
}