const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1;
var boy;
var mango;
var tree;
function preload()
{
  boyImg = loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1300, 700);
 

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
  
   stone=new Stone(175,445,60,60);
   mango1=new Mango(1220,350,80,80);
   mango2=new Mango(1120,250,80,80)
   mango3=new Mango(1120,350,80,80)
   mango4=new Mango(1000,150,80,80)
   mango5=new Mango(900,250,80,80)
   tree=new Tree(1000,350,600,600);
  slingshot=new Slingshot(stone.body,{x:175,y:445});
  Engine.run(engine);

	
  
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  image(boyImg,250,500,250,250);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  stone.display();
  slingshot.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}     
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}                                               
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
slingshot.attach(stone.body);
}
}