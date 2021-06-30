nosex=0;
nosey=0;

function preload() {
  clown_nose = loadImage('unnamed.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose', gotposes);
}

function modelloaded() {
  console.log('poseNet is initialized');
}

function gotposes(results)
{
  if(results.length > 0)
  {
    console.log(results);
    nosex = results[0].pose.nose.x-15;
    nosey = results[0].pose.nose.y-25;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  
}

function take_snapshot(){    
  save('myFilterImage.png');
}
