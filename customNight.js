function updateCNUI(ID,value)
{
let choice = document.getElementById(`CN${ID}`)
choice.innerText = Math.abs(parseInt(choice.innerText) + value)

if(parseInt(choice.innerText)>20)
{
choice.innerText = 20
}
}

function nightSeven()
{
    freddyAI = parseInt(document.getElementById(`CNfreddy`).innerText)
    bonnieAI = parseInt(document.getElementById(`CNbonnie`).innerText)
    chicaAI = parseInt(document.getElementById(`CNchica`).innerText)
    foxyAI = parseInt(document.getElementById(`CNfoxy`).innerText)
    if(freddyAI==1&&bonnieAI==9&&chicaAI==8&&foxyAI==7)
    {
        canGoldenKill = true
        goldenFreddy()
    }
    currentNight = 7
    startNight()
}