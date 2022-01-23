const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var ball, blower, blowerMouth;

var engine, world;
var button;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball = new Ball(400, 150, 30, 30);
  blowerMouth = new Blower(400, 200, 100, 100)
  blower = new Blower(250, 200, 200, 50)
  button = createButton("Click to Blow")
  button.position(400, 350)
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ball.display();
  blowerMouth.display();
  blower.display();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0, y:0}, {x:0, y:0.005})
}