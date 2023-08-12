let freddyInterval = window.setInterval(freddyMovement,5000)
let freddyAI = 0;
let freddyProgress = 0;
let laugh0 = new Audio("assets/sounds/laugh.wav")
let laugh1 = new Audio("assets/sounds/laugh1.wav")
let laugh2 = new Audio("assets/sounds/laugh2.wav")
let poweroutmusic = new Audio("assets/sounds/poweroutmusic.ogg")
let laugh = [laugh0,laugh1,laugh2]
/*
let runningSound = new Audio("assets/sounds/Run.ogg")
let shortBang = new Audio("assets/sounds/foxy_knock_long_false.wav")
let longBang = new Audio("assets/sounds/foxy_knock_long_true.ogg")
let bangArray = [shortBang,longBang,3000,7000]
*/
function freddyMovement()
{
let chance = Math.floor(Math.random() * 20 + 1)
if(freddyAI<chance)
{
    return;
}
//console.log(chance)
switch(freddyProgress)
{
    
    case 2:
        if(cameraOpen==true)
        {
            return;
        }
        poweroutmusic.play()
        poweroutmusic.loop = true
        freddyProgress++
        laugh[laugh[Math.floor(Math.random() * laugh.length)].play()]
    break;
    case 3:
        poweroutmusic.pause()
        freddyProgress++
        laugh[laugh[Math.floor(Math.random() * laugh.length)].play()]
    break;
    case 5: //corner
    if(cameraOpen==false)
    {
        if(rightDoorClosed&&currentCamera!="FOURB")
        {
            freddyProgress=4;
            laugh[Math.floor(Math.random() * laugh.length)].play()
        }
        return;
    }
        if(currentCamera != "FOURB")
        {
            if(rightDoorClosed)
            {
                freddyProgress=4;
                laugh[Math.floor(Math.random() * laugh.length)].play()
                return;
            }
                freddyProgress=6
                laugh[Math.floor(Math.random() * laugh.length)].play()
                
                
            //laugh
        }
    break;
    case 6: //office
    if(!cameraOpen&&blackOut==false)
    fan.style.display = "none"
    leftDoorPanel.style.display = "none"
    rightDoorPanel.style.display = "none"
    cameraButton.style.zIndex = "-1"
    rightDoorModel.style.display = "none"
    office.style.backgroundImage = "url(assets/jumpscares/freddyJPSC.webp)"
    jumpScream.play()
    death()
    break;
    default:
        //if(freddyProgress==3)
        //{
          //  poweroutmusic.pause()
        //}
        
        if(cameraOpen == false)
        {
            freddyProgress++
            let laughChoice = Math.floor(Math.random() * laugh.length)
            laugh[laughChoice].pause()
            laugh[laughChoice].currentTime = 0
            laugh[laughChoice].play()
        }
    break;
}
}

