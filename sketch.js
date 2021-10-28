
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
	 isStatic :false,
	 restitution:0.3
		 
 }
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  drawSprites();
 groundObj = new ground(width/2,670,width,20)
 leftside = new ground(1100,600,20,120);
}



