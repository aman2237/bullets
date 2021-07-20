var bullet , wall;
var speed , weight,thickness;

function setup() {
  createCanvas(1200,400);

bullet=createSprite(50, 200, 50, 50);
wall=createSprite(1200,280,thickness,height/2);


speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);

bullet.velocityX=speed;

}

function draw() {

background("white");

if(wall.x-bullet.x < (wall.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    wall.shapeColor="red";
  }
  if(deformation<180 && deformation>100);{
    wall.shapeColor="yellow";
  }
  if(deformation<100){
    wall.shapeColor="green";
  }

}
 drawSprites();
}
