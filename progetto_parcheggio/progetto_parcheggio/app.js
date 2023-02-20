//Register PWA service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

//Redirect HTTP to HTTPS
if(location.protocol=="http:"){
  location.href="https"+location.href.substring(4);
}


//codice


var n=0;
var original = document.getElementById("veicolo");

function ID(id){
  return document.getElementById(id);
}

function apriChiudi(id,aperto,chiuso){
  let veicoli = ID(id);

  if(veicoli.className === aperto){
    veicoli.classList.remove(aperto);
    veicoli.classList.add(chiuso);
  }
  else if(veicoli.className === chiuso){
    veicoli.classList.remove(chiuso);
    veicoli.classList.add(aperto);
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

