let img;
let imgurlt = "./img/cover.jpg";

function preload() {
    img = loadImage(imgurlt);
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background('#2e445b');
    font = loadFont('./img/Montserrat-ExtraBold.ttf');
    textFont(font);
}

function draw(){
    width = window.innerWidth;
    height = window.innerHeight;
    fill('#2e445b');
    rect(0,0,width,height);
    drawwindow(20,20,100,2,imgurlt,'0xffffff');

    if (mouseIsPressed == true){
        drawwindow(20,20,100,2,imgurlt,'#aaaaaa');
        fill('#cccccc');
        rect(300,0,400,200);
    }

    
}

function drawwindow(sx,sy,size,magni,imgurl,color){
    //img = loadImage(imgurl);
    fill(color);
    rect(sx,sy,sx+size*magni,sy+size*magni);
    img.resize(size*magni,size*magni);
    image(img,sx+magni*2,sy+magni*2);

}

function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
}
