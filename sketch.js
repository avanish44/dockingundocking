var shipimg,shuttleimg1,shuttleimg2,shuttleimg3,shuttleimg4,ship,shuttle;
var bg;
var hasdocked = false;

function preload(){
shipimg = loadImage("images/iss.png");
shuttleimg1 = loadImage("images/spacecraft1.png");
shuttleimg2 = loadImage("images/spacecraft2.png");
shuttleimg3 = loadImage("images/spacecraft3.png");
shuttleimg4 = loadImage("images/spacecraft4.png");
bg = loadImage("images/spacebg.jpg")
}
function setup() {
  createCanvas(800,400);
 ship = createSprite(330,130);
 shuttle = createSprite(285,240);
 ship.addImage(shipimg);
 ship.scale = 0.7;
 shuttle.addImage(shuttleimg1);
 shuttle.scale = 0.15;
}

function draw() {
  background(bg);
if(! hasdocked){
  shuttle.x = shuttle.x + random(+1,-1);
  if(keyDown("UP_ARROW")){
    shuttle.addImage(shuttleimg2);
    shuttle.y = shuttle.y - 2;
  }  
  if(keyDown("DOWN_ARROW")){
    shuttle.addImage(shuttleimg1);
  }  
  if(keyDown("LEFT_ARROW")){
    shuttle.addImage(shuttleimg3);
    shuttle.x = shuttle.x - 2;
  }  
  if(keyDown("RIGHT_ARROW")){
    shuttle.addImage(shuttleimg4);
    shuttle.x = shuttle.x + 2;
  }  
}
if(shuttle.y <= ship.y + 70 && shuttle.x <= ship.x - 10){
  hasdocked = true;
  textSize(30);
  fill("blue");
  text("docking successfull",285,240);
}
  drawSprites();
}