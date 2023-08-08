let cameraButton = document.getElementById("cameraToggler")
let flipAnimation = document.getElementById("laptopGif")
let cameras = document.getElementById("cameras")
let currentCamera = "ONEA"
let static = document.getElementById("staticGif")
let CamMap = document.getElementById("CamMap")
let cameraButtons = document.getElementById("cameraButtons")
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
    switch(currentCamera)
    {
        case "ONEC":
            flipAnimation.src = `assets/camera/CAM_ONEC-${foxyProgress}.webp`
        break;
        case "ONEB":
            flipAnimation.src = "assets/camera/CAM_ONEB.webp"
            if(freddyProgress==1)
            {
                flipAnimation.src = "assets/camera/CAM_ONEB-F.webp"
            }
            
        break;
        case "SEVEN":
            flipAnimation.src = "assets/camera/CAM_SEVEN.webp"
            if(freddyProgress==2)   
            {
                flipAnimation.src = "assets/camera/CAM_SEVEN-F.webp"
            }

        break;
        case "TWOA":
            if(foxyIsAtDoor)
            {
                flipAnimation.src = `assets/camera/CAM_TWOA_BfalseFfalse.webp`
            }
            else
            {
                flipAnimation.src = `assets/camera/CAM_TWOA_BfalseF${foxyProgress==3}.webp`
            }
            
            if(foxyProgress==3)
            {
                earlyReveal = true
                foxyAttack()
            }

            
        break;
        case "FOURA":
            flipAnimation.src = `assets/camera/CAM_FOURA-F${freddyProgress==4}Cfalse.webp`
        break;
        case "FOURB":
            flipAnimation.src = `assets/camera/CAM_FOURB-F${freddyProgress==5}Cfalse.webp`
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