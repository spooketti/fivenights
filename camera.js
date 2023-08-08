let cameraButton = document.getElementById("cameraToggler")
let flipAnimation = document.getElementById("laptopGif")
let cameras = document.getElementById("cameras")
let currentCamera = "ONEA"
let static = document.getElementById("staticGif")
let CamMap = document.getElementById("CamMap")
let cameraButtons = document.getElementById("cameraButtons")
let stageHolder = document.getElementById("stageDiv")
let fStage = document.getElementById("fStage")
let bStage = document.getElementById("bStage")
let cStage = document.getElementById("cStage")
let isAnimating = false
let cameraOpen = false

const delay = ms => new Promise(res => setTimeout(res, ms));
const activationAnimation = async () =>
{
if(isAnimating)
{
    return
}
cameraOpen = !cameraOpen
isAnimating = true
if(cameraOpen)
{
   
    cameras.style.display = "block"
    flipAnimation.src = `assets/cameraUp.gif`
    await delay(500)
    
    cameraButtons.style.display = "block"
    CamMap.style.display = "block"
    isAnimating = false
    static.style.display = 'block'
    document.getElementById(currentCamera).style.animation = "fadeInFromNone 2s ease infinite"
    changeCamera(currentCamera)
    return
}
    stageHolder.style.display = "none"
    flipAnimation.src = `assets/cameraDown.gif`
    static.style.display = 'none'
    CamMap.style.display = "none"
    cameraButtons.style.display = "none"
    stunFoxy()
    await delay(500)
    
    isAnimating = false
    cameras.style.display = "none"
}

const playTransition = async() =>
{
    static.src = "assets/cameraTransition.gif"
    static.style.opacity = "80%"
    await delay(100)
    static.src = "assets/static.gif"
    static.style.opacity = "20%"
    document.getElementById(currentCamera).style.animation = "fadeInFromNone 2s ease infinite"
    stageHolder.style.display = "none"
    switch(currentCamera)
    {
        case "ONEA":
        flipAnimation.src = `assets/camera/CAM_ONEA.webp`
        stageHolder.style.display = "block"
        function visibiltiyDict(prog)
        {
            switch(prog)
            {
                case 0:
                    return "block"
                default:
                    return "none"
            }
        }

        
        fStage.style.display = visibiltiyDict(freddyProgress)
        bStage.style.display = visibiltiyDict(bonnieProgress)
        cStage.style.display = visibiltiyDict(chicaProgress)
        break;
        case "ONEC":
            flipAnimation.src = `assets/camera/CAM_ONEC-${foxyProgress}.webp`
        break;
        case "ONEB":
            console.log('jesus')
            flipAnimation.src = "assets/camera/CAM_ONEB.webp"
            if(bonnieProgress==1)
            {
                flipAnimation.src = "assets/camera/CAM_ONEB-B.webp"
            }
            if(chicaProgress==1)
            {
                flipAnimation.src = "assets/camera/CAM_ONEB-C.webp"
            }
            if(freddyProgress==1)
            {
                flipAnimation.src = "assets/camera/CAM_ONEB-F.webp"
            }
        break;
        case "FIVE":
            flipAnimation.src = `assets/camera/CAM_FIVE${bonnieProgress==2}.webp`
        break;
        case "SEVEN":
            flipAnimation.src = `assets/camera/CAM_SEVEN-C${chicaProgress==2}.webp`
            if(freddyProgress==2)   
            {
                flipAnimation.src = "assets/camera/CAM_SEVEN-F.webp"
            }

        break;
        case "TWOA":
            if(foxyIsAtDoor)
            {
                flipAnimation.src = `assets/camera/CAM_TWOA_B${bonnieProgress==3}Ffalse.webp`
            }
            else if(foxyProgress==3)
            {
                flipAnimation.src = `assets/camera/CAM_TWOA_BfalseF${foxyProgress==3}.webp`
                earlyReveal = true
                foxyAttack()
            }
            else
            {
                flipAnimation.src = `assets/camera/CAM_TWOA_B${bonnieProgress==3}Ffalse.webp`
            }

            
        break;
        case "FOURA":
            flipAnimation.src = `assets/camera/CAM_FOURA-FfalseC${chicaProgress==4}.webp`
            if(freddyProgress==4)
            {
                flipAnimation.src = `assets/camera/CAM_FOURA-FtrueCfalse.webp`
            }
        break;
        case "FOURB":
            flipAnimation.src = `assets/camera/CAM_FOURB-FfalseC${chicaProgress==5}.webp`
            if(freddyProgress==5)
            {
                flipAnimation.src = `assets/camera/CAM_FOURB-FtrueCfalse.webp`
            }
        break;
        case "TWOB":
            flipAnimation.src = `assets/camera/CAM_TWOB${bonnieProgress==5}.webp`
        break;
        case "THREE":
            flipAnimation.src = `assets/camera/CAM_THREE${bonnieProgress==4}.webp`
        break;
        default:
            flipAnimation.src = `assets/camera/CAM_${currentCamera}.webp`

        break;
        
    }
}

function changeCamera(camera)
{
    document.getElementById(currentCamera).style.animation = null
    currentCamera = camera
    playTransition()
   
    

}

let cameraIterable = document.querySelectorAll(".cameraButton")
cameraIterable.forEach(camera => {
  camera.addEventListener('click', () => changeCamera(camera.id));
});