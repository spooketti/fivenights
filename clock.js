let timeClock = window.setInterval(passHour,90000)
let hour = 0
let AM = [12,1,2,3,4,5,6]
let clockUI = document.getElementById("clockUI")

function passHour()
{
hour+=1
clockUI.innerText = `${AM[hour]} AM`
switch(hour)
{
    case 2:
        bonnieAI++
    break;
    case 3:
        bonnieAI++
        chicaAI++
        foxyAI++
    break;
    case 4:
        bonnieAI++
        chicaAI++
        foxyAI++
    break;
}
}

console.log(AM[hour])