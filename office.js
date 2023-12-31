let farLeft = 0;
let farRight = -18;
let office = document.getElementById("office")
let currentTransform = -18

//office.style.transform = "0px"
let doorSound = new Audio("assets/sounds/door.ogg")
let lightSound = new Audio("assets/sounds/light.ogg")
let failSound = new Audio("assets/sounds/error.wav")
let honkSound = new Audio("assets/sounds/honk.mp3")
let direction
let moveInterval
let officeMoverLeft = document.getElementById("fastLeft")
let officeMoverRight = document.getElementById("fastRight")
let leftDoorPanel = document.getElementById("leftDoorPanel")
let rightDoorPanel = document.getElementById("rightDoorPanel")
let leftDoorModel = document.getElementById("leftDoor")
let rightDoorModel = document.getElementById("rightDoor")
let windowScare = new Audio("assets/sounds/windowscare.wav")
let leftDoorClosed = false;
let rightDoorClosed = false;
let leftLightOn = false;
let rightLightOn = false;
let jammed = false
let ldB = document.getElementById("leftDoorButton")
let rdB = document.getElementById("rightDoorButton")
let llB = document.getElementById("leftLightButton")
let rlB = document.getElementById("rightLightButton")
let freddyBlinking
let shortPowerOut = new Audio("assets/sounds/powerout_short.mp3")
let chosenSong
clearInterval(moveInterval)

window.onload = function()
{
    clearInterval(moveInterval)
    office.style.transform = "translate(-18%)"
}



function logId(id)
{
clearInterval(moveInterval)
officeMoverLeft.style.pointerEvents = null
officeMoverRight.style.pointerEvents = null
switch(id)
{
    case "fastLeft":
        moveInterval = window.setInterval(panOffice,0.1)
        direction = "left"
    break;
    /*
    case "slowLeft":
        moveInterval = window.setInterval(panOffice,50)
        direction = "left"
    break;
    case "slowRight":
        moveInterval = window.setInterval(panOffice,50)
        direction = "right"
    break;
    */
    case "fastRight":
        moveInterval = window.setInterval(panOffice,0.01)
        direction = "right"
    break;
}
}

function panOffice()
{
if(currentTransform >= farLeft && direction == "left")
{
currentTransform = farLeft
officeMoverLeft.style.pointerEvents = "none"

//office.style.transform = `translate(${currentTransform})`
//clearInterval(moveInterval)
return;
}
else if(currentTransform <= farRight && direction == "right")
{
    currentTransform = farRight
    officeMoverRight.style.pointerEvents = "none"
    //office.style.transform = `translate(${currentTransform})`
   // clearInterval(moveInterval)
    return;
}
if(direction == "left" && cameraOpen == false)
{
    currentTransform+=.3
}
else if(direction == "right" && cameraOpen == false)
{
    currentTransform-=.3
}

//console.log(currentTransform)
office.style.transform = `translate(${currentTransform}%)`
}

function rightDoor()
{
    
rightDoorClosed = !rightDoorClosed
if((bonnieProgress==7||chicaProgress==7||jammed))
    {
        if(!rightDoorClosed == true)
        {
            rightDoorModel.src = `assets/rDoorfalse.gif`
            doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
        }
        rightDoorClosed = false
        jammed = true
        failSound.pause()
        failSound.currentTime = 0
        failSound.play()
    }
    else
    {
doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
    rightDoorModel.src = `assets/rDoor${rightDoorClosed.toString()}.gif`
    }
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
if(rightDoorClosed)
{
    usage++
   // powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}
else if(jammed==false)
{
    usage--
    powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}
powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}

function leftLight()
{
    
leftLightOn = !leftLightOn
if(bonnieProgress==7||chicaProgress==7||jammed)
    {
        leftLightOn = false
        jammed = true
        failSound.pause()
        failSound.currentTime = 0
        failSound.play()
    }
    if(rightLightOn)
{
    usage--
}
rightLightOn = false
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
office.style.backgroundImage = `url("./assets/officelLight${leftLightOn}rLightfalseB${bonnieProgress==6&&leftLightOn}Cfalse.webp")`
lightSound.pause()
if(leftLightOn)
{
    usage++
    lightSound.pause()
    lightSound.currentTime = 0
    lightSound.play()
    if(bonnieProgress==6)
    {
        windowScare.pause()
        windowScare.currentTime = 0
        windowScare.play()
    }
}
else if(usage!=0)
{
    usage--
}
powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}

function honk()
{
    honkSound.pause()
    honkSound.currentTime = 0
    honkSound.play()
}

function leftDoor()
{
    leftDoorClosed = !leftDoorClosed
    if((bonnieProgress==7||chicaProgress==7||jammed))
    {
        if(leftDoorClosed==false)
        {

                leftDoorModel.src = `assets/lDoorfalse.gif`
                doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
            
        }
        leftDoorClosed = false
        jammed = true
        failSound.pause()
        failSound.currentTime = 0
        failSound.play()
    }
    else
    {
        doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
    leftDoorModel.src = `assets/lDoor${leftDoorClosed.toString()}.gif`
    }
    
    leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
    if(foxyIsAtDoor==true && leftDoorClosed == false && blackOut==false)
    {
        office.style.backgroundImage = "url(assets/jumpscares/foxyJPSC.webp)"
        leftDoorPanel.style.display = "none"
        leftDoorModel.style.display = "none"
        rightDoorPanel.style.display = "none"
        usage = 0
        jumpScream.play()
        death()
    }
    if(leftDoorClosed)
    {
        usage++
       // powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
    }
    else if(jammed==false)
    {
        usage--
        //powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
    }
    powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}

function rightLight()
{
    
rightLightOn = !rightLightOn
if(bonnieProgress==7||chicaProgress==7||jammed)
    {
        rightLightOn = false
        jammed = true
        failSound.pause()
        failSound.currentTime = 0
        failSound.play()
    }
    if(leftLightOn)
{
    usage--
}
leftLightOn = false
leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
office.style.backgroundImage = `url("./assets/officelLightfalserLight${rightLightOn}BfalseC${chicaProgress==6&&rightLightOn}.webp")`
lightSound.pause()
if(rightLightOn)
{
    usage++
    lightSound.pause()
    lightSound.currentTime = 0
    lightSound.play()
    if(chicaProgress==6)
    {
        windowScare.pause()
        windowScare.currentTime = 0
        windowScare.play()
    }
}
else if(usage!=0)
{
usage--
}

powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
}
let blink = false
function freddySong()
{
   // console.log(blink)
    blink=!blink
    office.style.backgroundImage = `url(assets/powerout_${blink}.webp)`
}
function freddySongKillPhase()
{
    if(nightStarted==false || !blackOut)
    {
        return;
    }
    chosenSong.pause()
    chosenSong.currentTime = 0
    office.style.opacity="0%"
    clearInterval(freddyBlinking)
    setTimeout(powerOutDeath,Math.random()*(20000-5000)+5000)
}
function powerOutDeath()
{
    if(!blackOut)
    {
        return;
    }
    office.style.opacity = null
    leftDoorModel.style.display = "none"
    rightDoorModel.style.display = "none"
    office.style.backgroundImage = "url(assets/jumpscares/freddyPOJPSC.webp)"
    jumpScream.play()
    death()
}
const freddyPowerOut = async() =>
{
    //console.log("bro")
    let blackOutSongs = [shortPowerOut,poweroutmusic]
    await delay(Math.random()*(20000-5000)+5000)
    if(!blackOut)
    {
        return;
    }
   // console.log("coc")
    freddyBlinking = setInterval(freddySong,300)
    chosenSong = blackOutSongs[Math.round(Math.random())]
    chosenSong.currentTime = 0
    chosenSong.loop = false
    chosenSong.play()
    setTimeout(freddySongKillPhase,Math.random()*(20000-5000)+5000)

    
    
}


document.addEventListener("keypress",function(e)
{
switch(e.key)
{
    case "a":
        leftDoor()
    break;
    case "d":
        rightDoor()
    break;
    case "s":
        activationAnimation()
    break;
    case "q":
        leftLight()
    break;
    case "e":
        rightLight()
    break;

}
})///reinstate this if the power usage dupe gets patched
/*
document.addEventListener("keypress",function(e)
{
    if(e.key=="c")
    {
        office.style.transform = `url(${currentTransform-1})`
        console.log(currentTransform)
    }
})
/*
document.addEventListener("keypress",function(e)
{
if(e.key=="a")
{
powerOut()ligh
}
if(e.key=="d")
{
    nightWon()
}
})
*/