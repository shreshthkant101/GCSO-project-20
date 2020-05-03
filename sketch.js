var weight;
var wall;
var speed;
var car;
function setup() {
  createCanvas(1600,400);
  fill(80,80,80);
  wall = createSprite(1200,200,60,200);
  wall.shapeColor = color(80,80,80);
  speed = random(30,95);
  weight = random(400,1500);
  car = createSprite(200,200,50,50);
  car.velocityX = speed;
  car.shapecolor = color("white");
}

function draw() {
  background(0);  
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    
    var deform  = 0.5 * weight * speed * speed / 22500;
    if(deform>180){
      car.shapeColor=color("red");
    }
    if(deform<180){
      if(deform>100){
      car.shapeColor=color("yellow");
      }
    }
    if(deform<100){
      car.shapeColor=color("green");
    }

  }
  car.collide(wall);
  drawSprites();
}