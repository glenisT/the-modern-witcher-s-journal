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
    console.log('Clicked element!');
    console.log(elementList);
    for(i = 0; i < elementList.length; i++)
    {
        if(elementList[i] == 'vitriol')
        {
            this.vitriol.style.animation = "vitriolShine 1s alternate 3";
        }
    }
}