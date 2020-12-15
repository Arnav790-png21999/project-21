var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
;
wall=createSprite(1200,200,thickness,height/2);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
wall.shapeColor=(80,80,80);
bullet=createSprite(50,200,100,10);
}

function draw() {
  background(255,255,255); 
  bullet.velocityX=speed;
function hasCollided(lbullet,wall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

if(wall.x- bullet.x<( bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor=color(225,0,0);
  }
  if(deformation<180 && deformation>100){
  bullet.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    bullet.shapeColor=color(0,255,0);
  }
  
  }

drawSprites();}
