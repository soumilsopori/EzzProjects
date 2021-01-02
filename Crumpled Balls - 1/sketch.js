
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper;
var ground;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;
    ground = new Ground(width/2,660,width,20);
	paper = new Paper(100,600,50);
	dustbin1 = new Dustbin(600,638,180,20);
	dustbin2 = new Dustbin(523,608,20,100);
	dustbin3 = new Dustbin(673,605,20,100);
	
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);
 
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



