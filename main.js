Webcam.set({
    width: 340,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
    
camera = document.getElementById("webcam");
Webcam.attach(camera);
    
function CaptureImage()
{
Webcam.snap( function (data_uri){
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+ data_uri +'">';
});
}
    
console.log('ml5.js', ml5.version);
    
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ORFO_LD5Z/model.json', modelLoaded);
    
function modelLoaded()
{
        console.log("Model is Loaded !");
}

function IdentifyImage()
{
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        document.getElementById("person_name").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence.toFixed(3);
    }
}