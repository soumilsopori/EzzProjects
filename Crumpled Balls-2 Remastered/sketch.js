const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var dusbin1, dustbin2, dustbin3
var paper


function preload(){
	dustbin = loadImage("dustbin.png");
}

function setup() {
  var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new Dustbin(1100,579,150,15);
	dustbin2 = new Dustbin(1185,500,15,170);
	dustbin3 = new Dustbin(1015,500,15,170);
	
	ground1 = new Ground(700,610,1400,30);
	
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

	image(dustbin,1000,400,200,200);	

	
}
function keyPressed(){
    if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-105});
		}
	}



