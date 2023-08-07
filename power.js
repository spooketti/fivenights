let power = 100
let usage = 0;
let drainRates = [0.141,.235,.341,.447]
let powerUI = document.getElementById("powerUI")
var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {
 power -= drainRates[usage]
 powerUI.innerText = `Power left:${Math.round(power)}%`
}