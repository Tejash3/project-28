var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);  
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  dustbinObj = new Dustbin(1000,565);
  ball=new  Paper(80,450);
  object1000=new Object100(1100,407,10,300);
  slingshot = new Slingshot(ball.body,{x:400, y:100});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("gray")
  Engine.update(engine);
  slingshot.display();
  ground.display();
  dustbinObj.display();
  ball.display();
  object1000.display();
  
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
  slingshot.fly()
}
