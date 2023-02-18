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

function apriChiudiEdit(){
  let veicoli = ID("riquadro-edit");

  if(veicoli.className === 'visibile'){
    veicoli.classList.remove('visibile');
    veicoli.classList.add('non-visibile');
  }
  else if(veicoli.className === 'non-visibile'){
    veicoli.classList.remove('non-visibile');
    veicoli.classList.add('visibile');
  }

}