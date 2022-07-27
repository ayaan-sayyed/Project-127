TheNights = "";
GamesBegin = "";
MagentaRiddim = "";

function preload() {
    TheNights = loadSound("The Nights.mp3");
    GamesBegin = loadSound("LET THE GAMES BEGIN.m3");
    MagentaRiddim = loadSound("Magenta Riddim.mp3");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(480, 250);
    background("white");
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 650, 470);
}


function play() {
    TheNights.play();
    TheNights.setVolume(0.7);
    TheNights.rate(2.5);
}