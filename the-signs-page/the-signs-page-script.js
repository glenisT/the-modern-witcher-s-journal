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
  aardDescription.innerHTML = "Aard <br/> Push shit";
  aardDescription.style.animation = "elementsFadeIn 1s";
  aardCell.style.animationPlayState = "paused";
  aard.style.marginTop = "100%"
});

aardCell.addEventListener("mouseout", function(){
  aard.style.animation = "anti-rotation 1s";
  aardDescription.style.animation = "elementsFadeOut 1s";
  aardCell.style.animationPlayState = "running";
  aard.style.marginTop = "-30%"
  aardDescription.innerHTML = "";
});

//Event listeners for QUEN
quenCell.addEventListener("mouseover", function(){
  quen.style.animation = "rotation 1s";
  quenDescription.innerHTML = "Quen <br/> Push shit";
  quenDescription.style.animation = "elementsFadeIn 1s";
  quenCell.style.animationPlayState = "paused";
  quen.style.marginTop = "100%"
});

quenCell.addEventListener("mouseout", function(){
  quen.style.animation = "anti-rotation 1s";
  quenDescription.style.animation = "elementsFadeOut 1s";
  quenCell.style.animationPlayState = "running";
  quen.style.marginTop = "-30%"
  quenDescription.innerHTML = "";
});

//Event listeners for igni
igniCell.addEventListener("mouseover", function(){
  igni.style.animation = "rotation 1s";
  igniDescription.innerHTML = "Igni <br/> Push shit";
  igniDescription.style.animation = "elementsFadeIn 1s";
  igniCell.style.animationPlayState = "paused";
  igni.style.marginTop = "100%"
});

igniCell.addEventListener("mouseout", function(){
  igni.style.animation = "anti-rotation 1s";
  igniDescription.style.animation = "elementsFadeOut 1s";
  igniCell.style.animationPlayState = "running";
  igni.style.marginTop = "-30%"
  igniDescription.innerHTML = "";
});

//Event listeners for yrden
yrdenCell.addEventListener("mouseover", function(){
  yrden.style.animation = "rotation 1s";
  yrdenDescription.innerHTML = "Yrden <br/> Push shit";
  yrdenDescription.style.animation = "elementsFadeIn 1s";
  yrdenCell.style.animationPlayState = "paused";
  yrden.style.marginTop = "100%"
});

yrdenCell.addEventListener("mouseout", function(){
  yrden.style.animation = "anti-rotation 1s";
  yrdenDescription.style.animation = "elementsFadeOut 1s";
  yrdenCell.style.animationPlayState = "running";
  yrden.style.marginTop = "-30%"
  yrdenDescription.innerHTML = "";
});

//Event listeners for axii
axiiCell.addEventListener("mouseover", function(){
  axii.style.animation = "rotation 1s";
  axiiDescription.innerHTML = "Axii <br/> Push shit";
  axiiDescription.style.animation = "elementsFadeIn 1s";
  axiiCell.style.animationPlayState = "paused";
  axii.style.marginTop = "100%"
});

axiiCell.addEventListener("mouseout", function(){
  axii.style.animation = "anti-rotation 1s";
  axiiDescription.style.animation = "elementsFadeOut 1s";
  axiiCell.style.animationPlayState = "running";
  axii.style.marginTop = "-30%"
  axiiDescription.innerHTML = "";
});