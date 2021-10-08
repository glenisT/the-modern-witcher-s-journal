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
            this.vitriol.style.animation = "vitriolShine 0.5s alternate 6";
            this.vitriol.addEventListener('animationend', ()=>{
                this.vitriol.removeAttribute('style');
              });
        }

        if(elementList[i] == 'rebis')
        {
            this.rebis.style.animation = "rebisShine 0.5s alternate 6";
            this.rebis.addEventListener('animationend', ()=>{
                this.rebis.removeAttribute('style');
              });
        }

        if(elementList[i] == 'hydragenum')
        {
            this.hydragenum.style.animation = "hydragenumShine 0.5s alternate 6";
            this.hydragenum.addEventListener('animationend', ()=>{
                this.hydragenum.removeAttribute('style');
              });
        }

        if(elementList[i] == 'quebirth')
        {
            this.quebirth.style.animation = "quebirthShine 0.5s alternate 6";
            this.quebirth.addEventListener('animationend', ()=>{
                this.quebirth.removeAttribute('style');
              });
        }

        if(elementList[i] == 'vermilion')
        {
            this.vermilion.style.animation = "vermilionShine 0.5s alternate 6";
            this.vermilion.addEventListener('animationend', ()=>{
                this.vermilion.removeAttribute('style');
              });
        }

        if(elementList[i] == 'albedo')
        {
            this.albedo.style.animation = "albedoShine 0.5s alternate 6";
            this.albedo.addEventListener('animationend', ()=>{
                this.albedo.removeAttribute('style');
              });
        }

        if(elementList[i] == 'nigredo')
        {
            this.nigredo.style.animation = "nigredoShine 0.5s alternate 6";
            this.nigredo.addEventListener('animationend', ()=>{
                this.nigredo.removeAttribute('style');
              });
        }

        if(elementList[i] == 'rubedo')
        {
            this.rubedo.style.animation = "rubedoShine 0.5s alternate 6";
            this.rubedo.addEventListener('animationend', ()=>{
                this.rubedo.removeAttribute('style');
              });
        }

        if(elementList[i] == 'aether')
        {
            this.aether.style.animation = "aetherShine 0.5s alternate 6";
            this.aether.addEventListener('animationend', ()=>{
                this.aether.removeAttribute('style');
              });
        }
    }
}