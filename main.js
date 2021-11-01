var NoseX;
var NoseY;
var Distance;
var RightX;
var LeftX;


function setup() {
    video = createCapture(VIDEO);
    video.size(300,300);

    canvas = createCanvas(800,400);
    canvas.position(400,175);

    posenet = ml5.poseNet(video, Status);
    posenet.on('pose', Check);
}

function Status() {
    console.info('Model Loaded');
}

function Check(Result){
    if(Result.length > 0){
        console.log(Result);
        NoseX = Result[0].pose.nose.x;
        NoseY = Result[0].pose.nose.y;
        RightX = Result[0].pose.rightWrist.x;
        LeftX = Result[0].pose.leftWrist.x;
        Distance = Math.floor(LeftX - RightX);
        console.log(LeftX , RightX , Distance);
    }
}

function draw() {
    background('#b37940');
    document.getElementById('H&W').innerHTML = Distance + '  Px';
    fill("white")
    textSize(Distance);
    text("HG Hit",NoseX,NoseY);
}