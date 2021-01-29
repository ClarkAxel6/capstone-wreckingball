const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var ball1;
var sling1;
var box1, box2, box3;

function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(450, 450, 900, 20);
  ball1 = new Ball(400, 200, 80);
  sling1 = new Sling(ball1.body, {x: 400, y: 50});
  box1 = new Box(500, 400, 80, 80);
  box2 = new Box(420, 400, 80, 80);
  box3 = new Box(380, 400, 80, 80);
  box4 = new Box(410, 320, 80, 80);
  box5 = new Box(420, 320, 80, 80);
  box6 = new Box(400, 400, 80, 80);
}

function draw() {
  background('white');
  Engine.update(engine);

  ground1.display();
  ball1.display();
  sling1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
}
