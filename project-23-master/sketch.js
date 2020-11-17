var helicopterImg, helicopterSprite, packageSprite,packageImg;
var packageBody,ground;
var log1, log2, log3, log4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

  helicopterImg=loadImage("helicopter.png");
  packageImg=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg)
	packageSprite.scale=0.2

	log1 = createSprite(width/2.0, 655, 150, 10);
	log1.shapeColor = "red";

	log2 = createSprite(width/2.5,630, 10, 80);
	log2.shapeColor = "red";

	log3 = createSprite(width/1.5, 630, 10, 80);
	log3.shapeColor = "red";

	log4 = createSprite(width/1.8, 655, 180, 10);
	log4.shapeColor = "red";

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255, 255)
	
	engine = Engine.create();
	world = engine.world;
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(log1, log2, log3, log4);


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);  
  }
  }




