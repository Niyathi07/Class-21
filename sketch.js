var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -5;
  
  movingRect = createSprite(600,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = 5;
 
  gameObject1 = createSprite(200,300,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(400,300,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityX = 5;
  
  gameObject3 = createSprite(600,300,50,50);
  gameObject3.shapeColor ="green";
  gameObject3.velocityX = -4;

  gameObject4 = createSprite (800,300,50,50);
  gameObject4.shapeColor = "green"
}
  

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject4))
  {
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }*/
 bounceOff(gameObject2 , gameObject3)
 
  drawSprites();
}

