var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,100,10,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

function draw() {
  background("yellow");  
  drawSprites();

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2 && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor="pink";
  fixedRect.shapeColor="pink";
}
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

}