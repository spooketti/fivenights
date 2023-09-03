let currentNight = 1
let mainFiveCompleted = false
let isPowerOut = false
let nightIntermission = document.getElementById("nightIntermission")
let mainMenu = document.getElementById("mainMenu")
let menuStatic = document.getElementById("menuStatic")
let nightName = document.getElementById("nightname")
let nightMarker = document.getElementById("nightMarker")
let SIXAM = document.getElementById("SIXAM")
let nightStarted = false
let isGaming = false
let sixamWinSound = new Audio("assets/sounds/chimes.wav")
let jumpScream = new Audio("assets/sounds/jumpScream.wav")
let staticSound = new Audio("assets/sounds/died.wav")
let fanbuzz = new Audio("assets/sounds/fanbuzz.wav")
let customNightUI = document.getElementById("customNight")
let CNB = document.getElementById("customNightButton")
let nightsixButton = document.getElementById("nightsix")
let chosenNight = 6
let storyNight = currentNight
let ringing = new Audio("assets/sounds/phonecall/phone.mp3")
let currentCall = new Audio(`assets/sounds/phonecall/20202020.mp3`)
let callTimer
if(localStorage.storyNight)
{
   currentNight = localStorage.storyNight
}
if(localStorage.mainFiveCompleted == "true")
{
    mainFiveCompleted = true
    nightsixButton.style.display = "block"
    CNB.style.display = "block"
}
//let cameraJam = false

//console.log(Boolean(localStorage.getItem("mainFiveCompleted")))
function stopEveryone()
{
    clearInterval(freddyInterval)
    clearInterval(bonnieInterval)
    clearInterval(chicaInterval)
    clearInterval(foxyInterval)
    clearInterval(timeClock)
    clearInterval(powerInterval)
    clearInterval(freddyBlinking)
}

stopEveryone()

const startNight = async() =>
{
    blackOut = false
    clearInterval(freddyBlinking)
    document.getElementById(currentCamera).style.animation = null
    if(currentNight > 7)
            {
            canGoldenKill = true
            goldenFreddy()
            localStorage.storyNight = 1
            }     
    leftDoorModel.src = "assets/lDoorfalse.gif"
    rightDoorModel.src = "assets/rDoorfalse.gif"
    leftDoorPanel.src  = "assets/door_panel/lDoorfalselLightfalse.webp"
    rightDoorPanel.src  = "assets/door_panel/rDoorfalserLightfalse.webp"
    usage = 0

    poweroutmusic.pause()
    poweroutmusic.currentTime = 0;
    customNightUI.style.display = "none"
    gfredSound.pause()
    powerUI.style.zIndex = "4"
    office.style.opacity = null
    nightStarted = true
    nightName.innerText = `Night ${storyNight}`
    nightMarker.innerText = `Night ${currentNight}`
    jammed = false
    hour = 0
    isGaming = true
    stopEveryone()
    mainMenu.style.display = "none"
    menuStatic.style.display = "none"
    nightIntermission.style.display = "block"
    fan.style.display = null
    leftDoorPanel.style.display = null
    rightDoorPanel.style.display = null
    cameraButton.style.zIndex = '4'
    leftDoorModel.style.display = null
    rightDoorModel.style.display = null
    cameraSwap.pause()
    cameraSwap.currentTime = 0
    cameraSwap.play()
    ldB.style.display = null
    rdB.style.display = null
    llB.style.display = null
    rlB.style.display = null
    await delay(1000)
    //currentNight = storyNight
    //localStorage.currentNight = currentNight
    freddyInterval = window.setInterval(freddyMovement,5000)
    bonnieInterval = window.setInterval(bonnieMovement,4970)
    chicaInterval = window.setInterval(chicaMovement,4800)
    foxyInterval = window.setInterval(foxyMovement,5000)
    timeClock = window.setInterval(passHour,90000)
    powerInterval = window.setInterval(powerDrain,1000)
    clockUI.innerText = `12 AM\nNight ${currentNight}`
    nightIntermission.style.display = "none"
    power=100
    bonnieProgress = 0
    foxyProgress = 0
    freddyProgress = 0
    chicaProgress = 0
    office.style.backgroundImage = "url(assets/officelLightfalserLightfalseBfalseCfalse.webp)"
    fanbuzz.play()
    fanbuzz.loop = true
    fanbuzz.volume = 0.2

    if(currentNight!=7)
    {
        freddyAI = aiNight[currentNight][0]
        bonnieAI = aiNight[currentNight][1]
        chicaAI = aiNight[currentNight][2]
        foxyAI = aiNight[currentNight][3]
    }
    if(currentNight!=6)
        {
        ringing.play()
        ringing.loop = true;
        setTimeout(phoneCall,6000)
        }
    
   
}

const phoneCall = async() =>
{
    if(currentNight==7)
    {
        if(freddyAI+bonnieAI+chicaAI+foxyAI==80)
        {
            document.getElementById("muteCall").style.display = "block"
            ringing.pause()
            ringing.currentTime = 0
         
                currentCall = new Audio(`assets/sounds/phonecall/20202020.mp3`)
                currentCall.volume = 0.7
                currentCall.play()
                await delay(1000)
    callTimer = setTimeout(hangup,(currentCall.duration*1000)-1000)
        }
        ringing.pause()
        ringing.currentTime = 0
        return;
        
    }
    document.getElementById("muteCall").style.display = "block"
    ringing.pause()
    ringing.currentTime = 0
 
        currentCall = new Audio(`assets/sounds/phonecall/night${currentNight}.mp3`)
        currentCall.volume = 0.7
        currentCall.play()
    
    await delay(1000)
    callTimer = setTimeout(hangup,(currentCall.duration*1000)-1000)
}

function hangup()
{
    //console.log("wh")
    currentCall.pause();
    currentCall.currentTime = 0;
    document.getElementById('muteCall').style.display='none';
}
function newGame()
{
    currentNight = 1;
    storyNight = 1;
    startNight()
}

const nightWon = async() =>
{
    isPowerOut = false
    clearInterval(freddyBlinking)
    clearTimeout(callTimer)
    document.getElementById(currentCamera).style.animation = null
    lightSound.pause()
    poweroutmusic.pause()
    poweroutmusic.currentTime = 0;
    leftLightOn = false
    rightLightOn = false
    leftDoorPanel.src = `assets/door_panel/lDoor${false}lLight${leftLightOn}.webp`
    rightDoorPanel.src = `assets/door_panel/rDoor${false}rLight${rightLightOn}.webp`
    hangup()
    poweroutmusic.loop = false
    clearInterval(freddyBlinking)
    stopEveryone()
    powerDSound.pause()
    fanbuzz.pause()
    kitchenSound.pause()
    shortBang.pause()
    longBang.pause()
    powerDSound.currentTime = 0
    nightStarted = false
    if(cameraOpen)
    {
        activationAnimation()
    }
    office.style.backgroundImage = "url(assets/officelLightfalserLightfalseBfalseCfalse.webp)"
   // left
    cameraButton.style.zIndex = "4"
    blackOut = false
    powerUI.style.zIndex = "4"
    leftDoorPanel.style.display = null
    rightDoorPanel.style.display = null
    leftDoorModel.style.display = null
    fan.style.display = null
    SIXAM.style.display = "block"
    SIXAM.src = "assets/sixam.gif"
    sixamWinSound.pause()
    sixamWinSound.currentTime = 0
    sixamWinSound.play()
    if(leftDoorClosed)
    {
        leftDoor()
    }
    if(rightDoorClosed)
    {
        rightDoor()
    }
    usage = 0
    currentCamera = "ONEA"
    await delay(10000)
    //power = 100
    //sixamWinSound.style.display = "none"
    switch(currentNight)
    {
        case 5:
            //alert("won!!!")
            storyNight = 5
            localStorage.storyNight = 5
            localStorage.mainFiveCompleted = true
            mainFiveCompleted = true
            death()
            nightsixButton.style.display = "block"
            CNB.style.display = "block"
          //  SIXAM.style.display = "none"
        break;
        case 6:
            storyNight = 5
            localStorage.storyNight = 5
            localStorage.mainFiveCompleted = true
            mainFiveCompleted = true
            death()
            nightsixButton.style.display = "block"
            CNB.style.display = "block"
          //  SIXAM.style.display = "none"
        break;
        case 7:
            storyNight = 5
            localStorage.storyNight = 5
            localStorage.mainFiveCompleted = true
            mainFiveCompleted = true
            death()
            nightsixButton.style.display = "block"
            CNB.style.display = "block"
         //   SIXAM.style.display = "none"
        break;
        default:
            SIXAM.src = ""  
        currentNight++
        storyNight = currentNight
        localStorage.storyNight = storyNight
        startNight()
        sixamWinSound.pause()
        SIXAM.style.display = "none"
        break;
    }

}

let aiNight =
//freddy bonnie chica foxy
[
    [0,0,0,0], //night 0 (fake)
    [0,0,0,0],
    [0,3,1,1],
    [1,0,5,2],
    [2,2,4,6],
    [3,5,7,5],
    [4,10,12,16]
]

window.addEventListener("load", updateMainMenu);
function updateMainMenu()
{
    if(currentNight==6)
    {
        nightName.innerText = "Night 5"
    }
    nightName.innerText = "Night 1"
    if(localStorage.storyNight)
    {
        nightName.innerText = "Night " + localStorage.storyNight
    }
    
}

const death = async() =>
{
    blackOut = false
    clearInterval(freddyBlinking)
    lightSound.pause()
    clearTimeout(callTimer)
    hangup()
    currentCall.pause()
    currentCall.currentTime = 0;
    stopEveryone()
    fanbuzz.pause()
    shortBang.pause()
    longBang.pause()
    currentNight = storyNight
    //storyNight = currentNight
    await delay(1000)
    SIXAM.src = ""
    SIXAM.style.display = "none"
    jumpScream.pause()
    kitchenSound.pause()
    poweroutmusic.pause()
    poweroutmusic.currentTime = 0;
    jumpScream.currentTime = 0
    menuStatic.style.opacity = "100%"
    menuStatic.style.display = "block"
    staticSound.pause()
    staticSound.currentTime = 0
    staticSound.play()
    await delay(5000)
    staticSound.pause()
    nightStarted = false
    menuStatic.style.opacity = "20%"
    jammed = false
    hour = 0
    localStorage.storyNight = storyNight
    isGaming = false
    mainMenu.style.display = "block"
    nightName.innerText = `Night ${storyNight}`
}

/*function callDeath() //wtf is the point of this
{
    death()
}*/

function nightSix()
{
    chosenNight = 6
    storyNight = localStorage.storyNight
    currentNight = chosenNight
    startNight()
}

function openCustomNight()
{
    cameraSwap.pause()
    cameraSwap.currentTime = 0
    cameraSwap.play()
    customNightUI.style.display = "block"
}

screen.orientation.lock('landscape');