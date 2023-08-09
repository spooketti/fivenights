let power = 100
let usage = 0;
let drainRates = [0.141,.235,.341,.447,.7]
let powerUI = document.getElementById("powerUI")
let powerInterval = window.setInterval(powerDrain, 1000);

function powerDrain() {
 power -= drainRates[usage]
 powerUI.innerHTML = `Power left:${Math.round(power)}% <br> Usage:<img src="assets/power${usage}.png">`
 
}