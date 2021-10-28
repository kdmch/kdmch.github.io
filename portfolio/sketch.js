let img = [];
let descript = [];
let grid = [];

descript[0] = ['icon','https://mitori.art/'];
descript[1] = ['twitter','https://twitter.com/kadomache'];
descript[2] = ['debug','https://mitori.art/diary'];

let debug;

function preload(){
    for(let i = 0; i<descript.length; i++){
        img[i] = loadImage('img/tile'+i+'.jpg');
    }
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background('#2e445b');
    font = loadFont('https://mitori.art/img/Montserrat-ExtraBold.ttf');
    textFont(font);
}

function redraw(){
    drawwindow(0,0,4,0,'#ffffff',255);
    drawwindow(4,2,1,1,'#ffffff',255);
    drawwindow(4,0,2,2,'#ffffff',255);
    drawwindow(4,3,1,1,'#ffffff',255);
    drawwindow(5,2,1,2,'#ffffff',255);
    drawwindow(6,0,2,1,'#ffffff',255);
}

function draw(){
    width = window.innerWidth;
    height = window.innerHeight;
    noStroke();
    fill('#2e445b');
    rect(0,0,width,height);

    fill('#ffffff');
    infox = Math.ceil((mouseX / window.innerWidth) /0.125) -1;
    infoy = Math.ceil((mouseY / window.innerWidth) /0.125) -1;
    text(infox,0,15);
    text(infoy,0,30);

    if(mouseIsPressed == true){
        url = gettile();
        drawwindow(20,20,4,0,'#274054',196);
    }

    
}

function drawwindow(gridx,gridy,magni,imgnum,color,grey){

    dynamix = 9.8;

    size = window.innerWidth /dynamix;
    padding = window.innerWidth / (dynamix*5);
    margin = (magni-1) *padding;
    frame = size /30;

    sx = size*gridx + padding*(gridx+1);
    sy = size*gridy + padding*(gridy+1);

    fill(color);
    rect(sx,sy, size*magni +margin, size*magni +margin);
    tint(grey, 255);
    img[imgnum].resize(size*magni +margin -frame*2, size*magni +margin -frame*2);
    image(img[imgnum], sx+frame, sy+frame);
}

function gettile(){
    mx = mouseX / window.innerWidth;
    detected = 0;
    return descript[detected];
}


function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
    redraw();
}

function randomint(min, max){ // --- original code from: mdn web docs
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}