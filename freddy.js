let freddyInterval = window.setInterval(freddyMovement,5000)
let freddyAI = 20;
let freddyProgress = 0;
let laugh0 = new Audio("assets/sounds/laugh.wav")
let laugh1 = new Audio("assets/sounds/laugh1.wav")
let laugh2 = new Audio("assets/sounds/laugh2.wav")
let laugh = [laugh0,laugh1,laugh2]
/*
let runningSound = new Audio("assets/sounds/Run.ogg")
let shortBang = new Audio("assets/sounds/foxy_knock_long_false.wav")
let longBang = new Audio("assets/sounds/foxy_knock_long_true.ogg")
let bangArray = [shortBang,longBang,3000,7000]
*/
function freddyMovement()
{
    console.log("f")
let chance = Math.floor(Math.random() * 20)
if(freddyAI<chance)
{
    return;
}
switch(freddyProgress)
{
    case 5: //corner
    if(cameraOpen==false)
    {
        return;
    }
        if(currentCamera != "FOURB")
        {
            if(rightDoorClosed)
            {
                freddyProgress=4;
            }
                freddyProgress=6
                laugh[Math.floor(Math.random() * laugh.length)].play()
            //laugh
        }
    break;
    case 6: //office
        alert("sucker")
    break;
    default:
        if(cameraOpen == false)
        {
            freddyProgress++
            laugh[Math.floor(Math.random() * laugh.length)].play()
        }
    break;
}
}

