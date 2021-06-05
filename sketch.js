var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;
var bobDiameter = 75;
var constraint;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,500,75,75);
	bob2 = new Bob(275,500,75,75);
	bob3 = new Bob(350,500,75,75);
	bob4 = new Bob(425,500,75,75);
	bob5 = new Bob(500,500,75,75);

	roof = new Roof(400,200,400,50);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	roof.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -250, y : 0})
	}
}

