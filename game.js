let currentNight = 1
let mainFiveCompleted = false
if(!localStorage.currentNight)
{
    localStorage.currentNight = 1
    localStorage.mainFiveCompleted = false
}
else
{
    currentNight = parseInt(localStorage.currentNight)
    mainFiveCompleted = Boolean(localStorage.mainFiveCompleted)
}

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
let chosenNight = 6
let storyNight = currentNight


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
   
}

function newGame()
{
    currentNight = 1;
    storyNight = 1;
    startNight()
}

const nightWon = async() =>
{
    poweroutmusic.loop = false
    clearInterval(freddyBlinking)
    stopEveryone()
    powerDSound.pause()
    fanbuzz.pause()
    powerDSound.currentTime = 0
    nightStarted = false
    office.style.backgroundImage = "url(assets/officelLightfalserLightfalseBfalseCfalse.webp)"
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
    currentCamera = "ONEA"
    await delay(8000)
    //power = 100
    SIXAM.src = ""
    sixamWinSound.style.display = "none"
    switch(currentNight)
    {
        case 5:
            //alert("won!!!")
            storyNight = 5
            localStorage.mainFiveCompleted = true
            mainFiveCompleted = true
            death()
        break;
        case 6:
            currentNight = storyNight
            storyNight = currentNight
            death()
        break;
        default:
        currentNight++
        storyNight = currentNight
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
    nightName.innerText = "Night " + currentNight
}

const death = async() =>
{
    stopEveryone()
    fanbuzz.pause()
    currentNight = storyNight
    storyNight = currentNight
    await delay(1000)
    jumpScream.pause()
    kitchenSound.pause()
    poweroutmusic.pause()
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
    localStorage.currentNight = currentNight
    isGaming = false
    mainMenu.style.display = "block"
}

/*function callDeath() //wtf is the point of this
{
    death()
}*/

function nightSix()
{
    chosenNight = 6
    storyNight = localStorage.currentNight
    currentNight = chosenNight
    startNight()
}