Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
    
    });
    
    Webcam.attach('#webcam_capture');
    
    function TakeSnap(){
        Webcam.snap(function(data_uri){
            document.getElementById("webcam_result").innerHTML = "<img id='Captured_image' src='" + data_uri + "'/>";
        });
    }

    function speak(){
        var synth = window.speechSynthesis;
            speak_data = "The hand sign you are showing is " +prediction;
           
    
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
    }
    

    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yv19lY0rj/model.json",modelLoaded);
function modelLoaded() {
    console.log("model is loaded");}

    function identify(){
        img = document.getElementById("Captured_image");
        classifier.classify(img,gotResult);
    }

    function gotResult(error,results){
        if(error) {
            console.log("error");
        }

        else {
            console.log(results);
          document.getElementById("emoji_name").innerHTML = results[0].label;

          prediction = results[0].label;
          speak();  

          if(results[0].label == "Yo") {
            document.getElementById("emoji_pic").innerHTML = "&#129304;";
          }

          else if(results[0].label == "Star Trek Hello"){
            document.getElementById("emoji_pic").innerHTML = "&#128406;";
          }

          else if(results[0].label == "Raised Fist"){
            document.getElementById("emoji_pic").innerHTML = "&#9994;";
          }

          else {
            document.getElementById("emoji_pic").innerHTML = "&#128076;";
          }

        }
    }
    
