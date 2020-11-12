
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

survivalTime=0;
  
FoodGroup=new Group();
obstaclesGroup=new Group();
  
  score=0;
  
}


function draw() {
  background("cyan");
  
  
if (keyDown("space")){
  monkey.velocityY=-12;
}  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  spawnFood();
  spawnObstacles();
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  

 
  drawSprites();

 stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);

if (obstaclesGroup.isTouching(monkey)){
ground.velocityX=0;
ground.velocityY=0;
obstaclesGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);
  banana.visible=false;
}
stroke("black");
fill("black");
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime, 100,50);
textSize(20);

function spawnFood(){
  if (frameCount % 80 === 0){
       banana=createSprite(300,100,30,30)
  banana.addImage("banana",(bananaImage));
  banana.scale=0.15;
    banana.velocityX=-4
    banana.lifetime=80;
    monkey.depth = banana.depth + 1;
  banana.y = Math.round(random(120,200));
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
    if (frameCount % 300 === 0){
obstacle=createSprite(400,330,30,30)
obstacle.velocityX=-4;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
      obstacle.lifetime=80;
      obstaclesGroup.add(obstacle);
    }
}

}


