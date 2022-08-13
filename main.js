Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'">';
    });

}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/edsBq2Q0_/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model has loaded!");
}
function speak(){
    synth=window.speechSynthesis;
    speak_data_1 = "The first prediction is "+prediction_1;
    speak_data_2 = "The second prediction is "+prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);

}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
console.log(results);
document.getElementById("result_gesture_name").innerHTML=results[0].label;
document.getElementById("result_gesture_name_2").innerHTML=results[1].label;
prediction_1 = document.getElementById("result_gesture_name").innerHTML=results[0].label;
prediction_2 = document.getElementById("result_gesture_name_2").innerHTML=results[1].label;
speak();
  if (results[0].label == "👍"){
  document.getElementById("update_emoji").innerHTML="&#128077;";
    }
if (results[0].label == "🤘"){
    document.getElementById("update_emoji").innerHTML="&#129304;";
}
if (results[0].label == "👌"){
    document.getElementById("update_emoji").innerHTML="&#128076;";
}
if (results[0].label == "👎"){
    document.getElementById("update_emoji").innerHTML="&#128078;";
}
if (results[0].label == "👏"){
    document.getElementById("update_emoji").innerHTML="&#128079;";
}
if (results[0].label == "✌"){
    document.getElementById("update_emoji").innerHTML="&#9996;;";
}
if (results[0].label == "👊"){
    document.getElementById("update_emoji").innerHTML="&#128074;;";
}
if (results[1].label == "👍"){
    document.getElementById("update_emoji_2").innerHTML="&#128077;;";
      }
  if (results[1].label == "🤘"){
      document.getElementById("update_emoji_2").innerHTML="&#129304;";
  }
  if (results[1].label == "👌"){
      document.getElementById("update_emoji_2").innerHTML="&#128076;";
  }
  if (results[1].label == "👎"){
      document.getElementById("update_emoji_2").innerHTML="&#128078;";
  }
  if (results[1].label == "👏"){
      document.getElementById("update_emoji_2").innerHTML="&#128079;";
  }
  if (results[1].label == "✌"){
      document.getElementById("update_emoji_2").innerHTML="&#9996;;";
  }
  if (results[1].label == "👊"){
      document.getElementById("update_emoji_2").innerHTML="&#128074;;";
  }
}
}
