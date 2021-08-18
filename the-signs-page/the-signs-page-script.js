/*Functions to play sound*/
const sound = new Audio();

function playSound() { 
  sound.src = '../audio/clicks/stone-grind-for-signs.wav' 
  sound.play() 
}

function playSoundReverse() { 
  sound.src = '../audio/clicks/stone-grind-for-signs-reverse.wav' 
  sound.play() 
}
//Get div behind to animate image and add description
var aardCell = document.getElementById("cell-aard")
var aardDescription = document.getElementById("aard-description");


var quenCell = document.getElementById("cell-quen")
var quenDescription = document.getElementById("quen-description");


var igniCell = document.getElementById("cell-igni")
var igniDescription = document.getElementById("igni-description");


var yrdenCell = document.getElementById("cell-yrden")
var yrdenDescription = document.getElementById("yrden-description");


var axiiCell = document.getElementById("cell-axii")
var axiiDescription = document.getElementById("axii-description");

//Event listeners for AARD
aardCell.addEventListener("mouseover", function(){
  aard.style.animation = "rotation 1s";
  aardDescription.innerHTML = "Aard <br/>Psychokinetic thrust. Pushes objects away.";
  aardDescription.style.color = "rgb(0, 0, 196)";
  aardDescription.style.animation = "elementsFadeIn 1s";
  playSound();

  aardCell.style.animationPlayState = "paused";
  aard.style.marginTop = "100%"

  quenCell.style.animationPlayState = "paused";
  igniCell.style.animationPlayState = "paused";
  yrdenCell.style.animationPlayState = "paused";
  axiiCell.style.animationPlayState = "paused";
});

aardCell.addEventListener("mouseout", function(){
  aard.style.animation = "anti-rotation 1s";
  aardDescription.innerHTML = "";
  aardDescription.style.animation = "elementsFadeOut 3s";
  playSoundReverse();

  aardCell.style.animation = "";
  aard.style.marginTop = "-30%"
  
  quenCell.style.animationPlayState = "running";
  igniCell.style.animationPlayState = "running";
  yrdenCell.style.animationPlayState = "running";
  axiiCell.style.animationPlayState = "running";
});

//Event listeners for QUEN
quenCell.addEventListener("mouseover", function(){
  quen.style.animation = "rotation 1s";
  quenDescription.innerHTML = "Quen<br/>Forms protective energy field.";
  quenDescription.style.color = "rgb(255, 208, 0)";
  quenDescription.style.animation = "elementsFadeIn 1s";
  playSound();

  quenCell.style.animationPlayState = "paused";
  quen.style.marginTop = "100%"

  aardCell.style.animationPlayState = "paused";
  igniCell.style.animationPlayState = "paused";
  yrdenCell.style.animationPlayState = "paused";
  axiiCell.style.animationPlayState = "paused";
});

quenCell.addEventListener("mouseout", function(){
  quen.style.animation = "anti-rotation 1s";
  quenDescription.innerHTML = "";
  quenDescription.style.animation = "elementsFadeOut 3s";
  playSoundReverse();

  quenCell.style.animation = "";
  quen.style.marginTop = "-30%"

  aardCell.style.animationPlayState = "running";
  igniCell.style.animationPlayState = "running";
  yrdenCell.style.animationPlayState = "running";
  axiiCell.style.animationPlayState = "running";
});

//Event listeners for igni
igniCell.addEventListener("mouseover", function(){
  igni.style.animation = "rotation 1s";
  igniDescription.innerHTML = "Igni<br/>Pyrokinetic burst. Ignites objects";
  igniDescription.style.animation = "elementsFadeIn 1s";
  playSound();

  igniCell.style.animationPlayState = "paused";
  igni.style.marginTop = "100%"

  aardCell.style.animationPlayState = "paused";
  quenCell.style.animationPlayState = "paused";
  yrdenCell.style.animationPlayState = "paused";
  axiiCell.style.animationPlayState = "paused";
});

igniCell.addEventListener("mouseout", function(){
  igni.style.animation = "anti-rotation 1s";
  igniDescription.innerHTML = "";
  igniDescription.style.animation = "elementsFadeOut 3s";
  playSoundReverse();

  igniCell.style.animation = "";
  igni.style.marginTop = "-30%"

  aardCell.style.animationPlayState = "running";
  quenCell.style.animationPlayState = "running";
  yrdenCell.style.animationPlayState = "running";
  axiiCell.style.animationPlayState = "running";
});

//Event listeners for yrden
yrdenCell.addEventListener("mouseover", function(){
  yrden.style.animation = "rotation 1s";
  yrdenDescription.innerHTML = "Yrden<br/>Creates barrier against and opponents";
  yrdenDescription.style.animation = "elementsFadeIn 1s";
  yrdenDescription.style.color = "rgb(105, 0, 167)";
  playSound();

  yrdenCell.style.animationPlayState = "paused";
  yrden.style.marginTop = "100%"

  aardCell.style.animationPlayState = "paused";
  quenCell.style.animationPlayState = "paused";
  igniCell.style.animationPlayState = "paused";
  axiiCell.style.animationPlayState = "paused";
});

yrdenCell.addEventListener("mouseout", function(){
  yrden.style.animation = "anti-rotation 1s";
  yrdenDescription.innerHTML = "";
  yrdenDescription.style.animation = "elementsFadeOut 3s";
  playSoundReverse();

  yrdenCell.style.animation = "";
  yrden.style.marginTop = "-30%"

  aardCell.style.animationPlayState = "running";
  quenCell.style.animationPlayState = "running";
  igniCell.style.animationPlayState = "running";
  axiiCell.style.animationPlayState = "running";
});

//Event listeners for axii
axiiCell.addEventListener("mouseover", function(){
  axii.style.animation = "rotation 1s";
  axiiDescription.innerHTML = "Axii<br/>Hypnotic sign for mind manipulation.";
  axiiDescription.style.animation = "elementsFadeIn 1s";
  axiiDescription.style.color = "green";
  playSound();

  axiiCell.style.animationPlayState = "paused";
  axii.style.marginTop = "100%"

  aardCell.style.animationPlayState = "paused";
  quenCell.style.animationPlayState = "paused";
  igniCell.style.animationPlayState = "paused";
  yrdenCell.style.animationPlayState = "paused";
});

axiiCell.addEventListener("mouseout", function(){
  axii.style.animation = "anti-rotation 1s";
  axiiDescription.innerHTML = "";
  axiiDescription.style.animation = "elementsFadeOut 3s";
  playSoundReverse();

  axiiCell.style.animation = "";
  axii.style.marginTop = "-30%"

  aardCell.style.animationPlayState = "running";
  quenCell.style.animationPlayState = "running";
  igniCell.style.animationPlayState = "running";
  yrdenCell.style.animationPlayState = "running";
});