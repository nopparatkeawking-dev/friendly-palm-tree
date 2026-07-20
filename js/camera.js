const video=document.getElementById("video");

async function startCamera(){

try{

const stream=

await navigator.mediaDevices.getUserMedia({

video:{

facingMode:"environment"

},

audio:false

});

video.srcObject=stream;

}catch(e){

alert(e.message);

}

}

startCamera();
