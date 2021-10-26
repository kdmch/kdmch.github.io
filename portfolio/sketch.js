let img = [];
let imgdscr = [];
imgdscr[0] = 'icon';

function preload(){
    for(let i = 0; i<imgdscr.length; i++){
        img[i] = loadImage('img/tile'+i+'.jpg');
    }
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background('#2e445b');
    font = loadFont('https://mitori.art/img/Montserrat-ExtraBold.ttf');
    textFont(font);
}

function draw(){
    width = window.innerWidth;
    height = window.innerHeight;
    noStroke();
    fill('#2e445b');
    rect(0,0,width,height);
    drawwindow(20,20,200,2,0,'0xffffff');
    if (mouseIsPressed == true){
        drawwindow(20,20,200,2,0,'#aaaaaa');
        fill('#cccccc');
        rect(300,0,400,200);
    }

    
}

function drawwindow(sx,sy,size,magni,imgnum,color){
    //img = loadImage(imgurl);
    fill(color);
    rect(sx,sy,sx+size*magni,sy+size*magni);
    imageMode(CORNERS)
    img[imgnum].resize(size*magni*1.1,size*magni*1.1);
    image(img[imgnum],sx,sy);

}

function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
}
