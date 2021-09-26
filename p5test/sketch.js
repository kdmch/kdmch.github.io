var pos = 0;
var dy, sy, moveflag, touchflag = 0;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
}
function draw(){
    width = window.innerWidth;
    height = window.innerHeight;
    fill(0,0,0);
    rect(0,0,width,height);
    fill(0,128,0);
    ellipse(width/2,height/2+pos,100);
}

function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
}

function mouseWheel(event) {
    dy = event.delta;
    print(dy);
    pos += dy;
    return false;
}

function touchStarted() {
    dy = 0;
    sy = mouseY;
    moveflag = false;
    touchflag = true;
    return false;
}

function touchMoved() {
    dy = sy - mouseY;
    sy = mouseY;
    pos += dy;
    return false;
}

function touchEnded() {
    touchflag = false;
    return false;
}