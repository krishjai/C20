
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor ="yellow";
  fixedRect.velocityX = -5

  movingRect = createSprite(200,200,50,90);
  movingRect.shapeColor = "yellow";
  movingRect.velocityX = 5;
}

function draw() {
 background("skyblue");

 //movingRect.x = mouseX;
 //movingRect.y = mouseY;

 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red"
 }
 else{
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
 }
 if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY= fixedRect.velocityY*(-1);
  }
 drawSprites()
}