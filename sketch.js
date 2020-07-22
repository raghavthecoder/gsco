var wall;
var car1;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  car1=createSprite(50,200,50,50);
  wall=createSprite(700,200,60,200);

  speed=random(50,90);
  weight=random(400,1500);  

  car1.velocityX=speed
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car1.x<(car1.width+wall.width)/2){
    car1.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }

    if(deformation>180){
      car1.shapeColor=color(230,230,0);
     }

     if(deformation<100){
      car1.shapeColor=color(0,255,0)
     }

  }

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}