//Register PWA service worker
/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

//Redirect HTTP to HTTPS
if(location.protocol=="http:"){
  location.href="https"+location.href.substring(4);
}*/


//codice

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