const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;

function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(650,600,1400,20);

  box1 = new Box(500,450,30,300);
  box2=new Box(570,450,30,300);
  box3 = new Box(770,225,30,150);
  box4=new Box(700,225,30,150);
  box5 = new Box(570,225,30,150);  
  box6 = new Box(500,225,30,150); 
  box7 = new Box(770,450,30,300);
  box8 = new Box(700,450,30,300);
  box9 = new Box(635,450,30,300);
  box10 = new Box(635,580,350,20);
  box11 = new Box(635,300,300,20);
  
  box13 = new Box(635,125,300,20); 
  box14 = new Box(635,145,300,20); 
  box15 = new Box(635,105,240,20); 
  box16 = new Box(635,75,160,40);  

  
  
 
}

  function draw(){
    background("black");
Engine.update(engine);

box1.display();
box2.display();
box4.display();
box5.display();
box3.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box15.display();
box16.display();
box13.display();
box14.display();

ground.display();

  }


  



