let chicaInterval = window.setInterval(chicaMovement,4800)
let chicaAI = 20;
let chicaProgress = 0;
let kitchenSound = new Audio("assets/sounds/kitchen.wav")
/*
let runningSound = new Audio("assets/sounds/Run.ogg")
let shortBang = new Audio("assets/sounds/foxy_knock_long_false.wav")
let longBang = new Audio("assets/sounds/foxy_knock_long_true.ogg")
let bangArray = [shortBang,longBang,3000,7000]if()
*/
function chicaMovement()
{
let chance = Math.floor(Math.random() * 20)
if(chicaAI<chance)
{
    return;
}
switch(chicaProgress)
{
    case 2:
        kitchenSound.play()
        kitchenSound.loop = true
        chicaProgress++
    break;
    case 6:
        if(rightDoorClosed)
        {
            chicaProgress = 1
            return;
        }
        chicaProgress++
    break;
    default:
        if(chicaProgress!=3)
        {
            kitchenSound.pause()
        }
        chicaProgress++
    break;
}
}

