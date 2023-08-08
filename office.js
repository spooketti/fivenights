let farLeft = 0;
let farRight = -280;
let office = document.getElementById("office")
let currentTransform = -120
//office.style.transform = "translate(-120px)"
let doorSound = new Audio("assets/sounds/door.ogg")
let lightSound = new Audio("assets/sounds/light.ogg")
let direction
let moveInterval
let officeMoverLeft = document.getElementById("fastLeft")
let officeMoverRight = document.getElementById("fastRight")
let leftDoorPanel = document.getElementById("leftDoorPanel")
let rightDoorPanel = document.getElementById("rightDoorPanel")
let leftDoorModel = document.getElementById("leftDoor")
let rightDoorModel = document.getElementById("rightDoor")
let leftDoorClosed = false;
let rightDoorClosed = false;
let leftLightOn = false;
let rightLightOn = false;
clearInterval(moveInterval)

window.onload = function()
{
    office.style.transform = `translate(-120px)`
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
    currentTransform+=5
}
else if(direction == "right" && cameraOpen == false)
{
    currentTransform-=5
}

//console.log(currentTransform)
office.style.transform = `translate(${currentTransform}px)`
}

function rightDoor()
{
    if(bonnieProgress==7||chicaProgress==7)
    {
        return;
    }
rightDoorClosed = !rightDoorClosed
doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
rightDoorModel.src = `assets/rDoor${rightDoorClosed.toString()}.gif`
}

function leftLight()
{
    if(bonnieProgress==7||chicaProgress==7)
    {
        return;
    }
leftLightOn = !leftLightOn

rightLightOn = false
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
office.style.backgroundImage = `url("./assets/officelLight${leftLightOn}rLightfalseB${bonnieProgress==6&&leftLightOn}Cfalse.webp")`
lightSound.pause()
if(leftLightOn)
{
    lightSound.pause()
    lightSound.currentTime = 0
    lightSound.play()
}
}



function leftDoor()
{
    if(bonnieProgress==7||chicaProgress==7)
    {
        return;
    }
    leftDoorClosed = !leftDoorClosed
    doorSound.pause()
    doorSound.currentTime = 0
    doorSound.play()
    leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
    leftDoorModel.src = `assets/lDoor${leftDoorClosed.toString()}.gif`
    console.log(foxyIsAtDoor)
    console.log(leftDoorClosed)
    if(foxyIsAtDoor==true && leftDoorClosed == false)
    {
        alert("death")
    }
}

function rightLight()
{
    if(bonnieProgress==7||chicaProgress==7)
    {
        return;
    }
rightLightOn = !rightLightOn
leftLightOn = false
leftDoorPanel.src = `assets/door_panel/lDoor${leftDoorClosed.toString()}lLight${leftLightOn}.webp`
rightDoorPanel.src = `assets/door_panel/rDoor${rightDoorClosed.toString()}rLight${rightLightOn}.webp`
office.style.backgroundImage = `url("./assets/officelLightfalserLight${rightLightOn}BfalseC${chicaProgress==6&&rightLightOn}.webp")`
lightSound.pause()
if(rightLightOn)
{
    lightSound.pause()
    lightSound.currentTime = 0
    lightSound.play()
}
}