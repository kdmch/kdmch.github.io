
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
    ellipse(width/2,height/2,100);
}

function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
}