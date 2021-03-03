const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, ground,box1;

function setup() {
	createCanvas(1440,840);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200,200,100,20);
	ground = new Ground(600,height,1700,30);
	box = new Stone(1000,600,150,150);
  iron = new Stone(600,600,120,90);
	circle1 = new Sand(600,600,10);
	circle2 = new Sand(602,600,10);
	circle3 = new Sand(604,600,10);
	circle4 = new Sand(606,600,10);
	circle5 = new Sand(608,600,10);
	circle6 = new Sand(610,600,10);
	circle7 = new Sand(612,600,10);
	circle8 = new Sand(614,600,10);
	circle9 = new Sand(616,600,10);
	circle10 = new Sand(618,600,10);
	circle11 = new Rubber(1200,600,60);
}


function draw() {
  background("lavender");
  Engine.update(engine);

  hammer.display();
  ground.display();
  box.display();
  iron.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  circle11.display();
}