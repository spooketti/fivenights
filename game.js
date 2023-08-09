let currentNight = 1
let nightIntermission = document.getElementById("nightIntermission")
let mainMenu = document.getElementById("mainMenu")
let menuStatic = document.getElementById("menuStatic")
let nightName = document.getElementById("nightname")
let SIXAM = document.getElementById("SIXAM")
let isGaming = false
let sixamWinSound = new Audio("assets/sounds/chimes.wav")
const startNight = async() =>
{
    isGaming = true
    clearInterval(freddyInterval)
    clearInterval(bonnieInterval)
    clearInterval(chicaInterval)
    clearInterval(foxyInterval)
    clearInterval(timeClock)
    clearInterval(powerInterval)
    mainMenu.style.display = "none"
    menuStatic.style.display = "none"
    nightIntermission.style.display = "block"
    await delay(1000)
    freddyInterval = window.setInterval(freddyMovement,5000)
    bonnieInterval = window.setInterval(bonnieMovement,4970)
    chicaInterval = window.setInterval(chicaMovement,4800)
    foxyInterval = window.setInterval(foxyMovement,5000)
    timeClock = window.setInterval(passHour,90000)
    powerInterval = window.setInterval(powerDrain,1000)
    nightName.innerText = `Night ${currentNight}`
    clockUI.innerText = `12 AM\nNight ${currentNight}`
    nightIntermission.style.display = "none"
    power=100
    bonnieProgress = 0
    foxyProgress = 0
    freddyProgress = 0
    chicaProgress = 0

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
    startNight()
}

const nightWon = async() =>
{
    SIXAM.style.display = "block"
    sixamWinSound.pause()
    sixamWinSound.currentTime = 0
    sixamWinSound.play()
    await delay(8000)
    if(currentNight<5)
    {
        currentNight++
        startNight()
        sixamWinSound.style.display = "none"
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