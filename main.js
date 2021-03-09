var nose_x = 0;
var nose_y = 0;

function preload() {
    virtualdriver = loadImage("https://i.postimg.cc/Y0gNx37C/Power-Steering.png");
}

function setup() {
    canvas = createCanvas(550, 530);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function draw() {
    image(virtualdriver, nose_x - 15, nose_y - 15, 30, 30);
}

function takeSnapshot() {
    save("Virtual Driver.png");
}
