var fixedRect, movingRect;
var yeet,peace,cookie;
var candy,pizza;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  yeet = createSprite(100,100,50,50);
  yeet.shapeColor = "green";
  yeet.debug = true;
  peace = createSprite(200,100,50,50);
  peace.shapeColor = "green";
  peace.debug = true;
  cookie = createSprite(300,100,50,50);
  cookie.shapeColor = "green";
  cookie.debug = true;
  candy = createSprite(100,300,50,50);
  candy.shapeColor = "purple";
  candy.debug = true;
  pizza = createSprite(900,300,50,50);
  pizza.shapeColor = "blue";
  pizza.debug = true;
  candy.velocityX = 2;
  pizza.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(candy,pizza);

  //Function with arguments
 if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green";
 }

 if(isTouching(movingRect,yeet)){
  movingRect.shapeColor = "red";
  yeet.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  yeet.shapeColor = "green";
}

if(isTouching(movingRect,peace)){
  movingRect.shapeColor = "red";
  peace.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  peace.shapeColor = "green";
}

if(isTouching(movingRect,cookie)){
  movingRect.shapeColor = "red";
  cookie.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  cookie.shapeColor = "green";
}
  drawSprites();
}

