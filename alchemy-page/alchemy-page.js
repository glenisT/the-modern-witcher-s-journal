let elementList = [];
let color = '';
var i = 0;

const vitriol = document.getElementById('vitriol');
const rebis = document.getElementById('rebis');
const aether = document.getElementById('aether');
const quebirth = document.getElementById('quebirth');
const hydragenum = document.getElementById('hydragenum');
const vermilion = document.getElementById('vermilion');
const albedo = document.getElementById('albedo');
const nigredo = document.getElementById('nigredo');
const rubedo = document.getElementById('rubedo');

function lightUpElements(elementList)
{
    for(i = 0; i < elementList.length; i++)
    {
        if(elementList[i] == 'vitriol')
        {
            this.vitriol.style.animation = "vitriolShine 1s alternate 3";
        }

        if(elementList[i] == 'rebis')
        {
            this.rebis.style.animation = "rebisShine 1s alternate 3";
        }

        if(elementList[i] == 'hydragenum')
        {
            this.hydragenum.style.animation = "hydragenumShine 1s alternate 3";
        }

        if(elementList[i] == 'quebirth')
        {
            this.quebirth.style.animation = "quebirthShine 1s alternate 3";
        }

        if(elementList[i] == 'vermilion')
        {
            this.vermilion.style.animation = "vermilionShine 1s alternate 3";
        }

        if(elementList[i] == 'albedo')
        {
            this.albedo.style.animation = "albedoShine 1s alternate 3";
        }

        if(elementList[i] == 'nigredo')
        {
            this.nigredo.style.animation = "nigredoShine 1s alternate 3";
        }

        if(elementList[i] == 'rubedo')
        {
            this.quebirth.style.animation = "rubedoShine 1s alternate 3";
        }

        if(elementList[i] == 'aether')
        {
            this.aether.style.animation = "aetherShine 1s alternate 3";
        }
    }
}