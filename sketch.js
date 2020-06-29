var wall,thickness;
var bullet;
var speed, weight;


function setup() {
  var canvas = createCanvas(1600,400);
  speed = random(233,321);
  weight = random(30,52);
  bullet = createSprite(50,350,50,50);
  bullet.shapeColor=(155,155,155);
  wall = createSprite(1000,300,60,height/2);
  wall.shapeColor=(255);
  thickness = random(22,83);
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed; 
  
  if(bullet.x-wall.x<bullet.width/2+wall.width/2&&
    wall.x-bullet.x<bullet.width/2+wall.width){
    var deformation=(0.5*weight*speed*speed)/thickness*thickness*thickness;
    if(deformation<10){
      wall.shapeColor=(0,255,0);
      bullet.velocityX=0;
      bullet.x=900;
    }
    if(deformation>10){
      wall.shapeColor="red";
      bullet.velocityX=0
      bullet.x=900;
    }
  } 
  drawSprites();
}
