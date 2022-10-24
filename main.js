var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textarea").innerHTML="";
    Recognition.start();
    

}

Recognition.onresult = 
function run(event){
    console.log(event)
    var bruh = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML=bruh;     
    speak();
}


function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textarea").value;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    
camera=document.getElementById("camera")
Webcam.attach(camera);

}


Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});



