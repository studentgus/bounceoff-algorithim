
var a, b;

function setup() {
  createCanvas(1200,800);
  maggie = createSprite(400,100,50,80);
  maggie.shapeColor = "green";
  gus = createSprite(400,800,80,30);
  gus.shapeColor = "green";


gus.velocityY = -5;
maggie.velocityY = 5;

}

function draw() {
  background(255,255,255); 
 // b.x = mouseX;
  //b.y = mouseY;

  bounceOff(gus,maggie);
  
   drawSprites();
   

}

