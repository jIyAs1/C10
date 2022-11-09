var trex ,trex_running;
var edges;
var ground, ground_image;

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  ground_image = loadImage('ground2.png');
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  //create edge sprite
  //edges = createEdgeSprites();
  
  ground = createSprite(200,180,400,20);
  ground.addImage(ground_image);
}

function draw(){
  //set the background
  background(220);

  ground.velocityX=-2;

  console.log(trex.y);

  if (ground.x<0){
    ground.x = ground.width/2;
  }

  //jump when space key is pressed
  if (keyDown("space")){
    trex.velocityY=-10;
  }

  //add gravity
  trex.velocityY=trex.velocityY+0.5;

  //stop trex from falling down
  trex.collide(ground);

  drawSprites();

}
