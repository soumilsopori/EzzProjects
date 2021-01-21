const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var dusbin1, dustbin2, dustbin3
var paper

function preload(){
	boximage = loadImage("dustbin.png");
}

function setup() {
  var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new Dustbin(1100,495,150,15);
	dustbin2 = new Dustbin(1185,420,15,170);
	dustbin3 = new Dustbin(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper = new Paper(200,300);
	
	Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
	
	paper.display();

	ground1.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	image(boximage,1000,330,200,200);
}

function keyPressed()	{
    if(keyCode === UP_ARROW)	{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
        }
	}



