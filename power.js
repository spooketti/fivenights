let power = 100
let blackOut = false
let usage = 0;
let drainRates = [0.141,.235,.341,.447,.7]
let powerUI = document.getElementById("powerUI")
let powerInterval = window.setInterval(powerDrain, 1000);
let fan = document.getElementById("fan")
let powerDSound = new Audio("assets/sounds/powerdown.wav")

function powerDrain() {
 power -= drainRates[usage]
 powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
 if(power<=0&&blackOut==false&&nightStarted==true)
 {
    blackOut = true
    powerOut()
 }
}

const powerOut = async() =>
{
    cameraButton.style.zIndex = "-1"
    powerUI.style.zIndex = "-1"
    //powerDSound.pause()
    powerDSound.play()
    console.log("roku")
    office.style.backgroundImage = "url(assets/powerout_false.webp)"
    fan.style.display = "none"
}