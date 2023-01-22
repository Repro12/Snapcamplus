muche_x=0;
muche_y=0;

function preload(){
    muche = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,299,299);
    image(muche,muche_x,muche_y,60,45);
}

function take_snapshot(){
    save("picture.png");
}