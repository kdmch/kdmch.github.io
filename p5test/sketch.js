var pos = 0;
var dy, sy, moveflag, touchflag = 0;
var hlimit = -400;
var descr = [];

function setup(){
    descr[0] = ['mt portfolio',0.03];
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    font = loadFont('./img/Montserrat-ExtraBold.ttf');
    textFont(font);
}
function draw(){
    width = window.innerWidth;
    height = window.innerHeight;
    fill(0,0,0);
    rect(0,0,width,height);
    fill(0,180,190);
    //ellipse(width/2,height/2+pos,100);
    text(descr[0][0],width/2-40,height/2+pos);


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
        dy = 0;
        pos -= abs(pos)*1.5;
    }else if(pos < hlimit){
        dy = 0;
        pos += abs(hlimit-pos)*1.5;
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