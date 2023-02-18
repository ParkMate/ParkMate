//Register PWA service worker
/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

//Redirect HTTP to HTTPS
if(location.protocol=="http:"){
  location.href="https"+location.href.substring(4);
}*/


//codice
var n=0;
var original = document.getElementById("veicolo");

function ID(id){
  return document.getElementById(id);
}

function apriChiudi(){
  let veicoli = ID("veicoli");

  if(veicoli.className === 'open'){
    veicoli.classList.remove('open');
    veicoli.classList.add('close');
  }
  else if(veicoli.className === 'close'){
    veicoli.classList.remove('close');
    veicoli.classList.add('open');
  }

}
function addVehicles(){
  let veicolo = document.getElementsByClassName("veicolo");
  let veicoli = document.getElementById("veicoli");
  let divClone = veicolo[0].cloneNode(true);
  veicoli.appendChild(divClone);
}

function getPos() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}