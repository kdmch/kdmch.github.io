var pos = 0;
var dy, sy, moveflag, touchflag = 0;
var hlimit = -200;

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

//------------------------------マウス関連
function mouseMoved() {
    //cursor(ARROW);
}

function mouseWheel(event) {
    dy = event.delta;
    print(pos);
    if(pos <= 0 && pos >= hlimit){
        pos -= dy;
    }else if(pos > 0){
        pos = 0;
    }else if(pos < hlimit){
        pos = hlimit;
    }
    return false;
}

//------------------------------タッチ関連
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
    print(pos);
    if(pos <= 0 && pos >= hlimit){
        pos -= dy;
    }else if(pos > 0){
        pos = 0;
    }else if(pos < hlimit){
        pos = hlimit;
    }
    return false;
}

function touchEnded() {
    touchflag = false;
    return false;
}