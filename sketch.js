const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,backgroundimg;
var canvas,cannon,angle,tower,ground;

var towerimg;
var balls=[];

//cb means cannnonBall
var cb;


function preload(){
  backgroundimg=loadImage("assets/background.gif");
  towerimg=loadImage("assets/tower.png");

}

function setup(){
canvas=createCanvas(1200,600);

engine=Engine.create();
world=engine.world;

angleMode(DEGREES);
angle=15

var options={
  isStatic:true
}

ground=Bodies.rectangle(0,height-1,width*2,1,options);
World.add(world,ground);

tower=Bodies.rectangle(160,350,160,310,options);
World.add(world,tower);

cannon=new Cannon(180,110,130,100,angle);
//cb=new CannonBall(cannon.x,cannon.y);
}

function draw(){
image(backgroundimg,0,0,width,height);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(towerimg,tower.position.x,tower.position.y,160,310); 
 pop();

 for(var i=0;i<balls.length;i++){
 showCannonBalls(balls[i]);
 }

 cannon.display();
 //cb.display();
}

function keyPrssed(){
  if(keyCode===DOWN_ARROW){
    var cb=new CannonBall(cannon.x,cannon.y);
    cb.trajectory=[];
    Matter.Body.setAngle(cb.body,cannon.angle);
    balls.push(cb);
  }
}

function showCannonBalls(ball){
  if(ball){
  ball.display();
  }
  }
function keyReleased(){

  if(keyCode===DOWN_ARROW){
//cb.shoot();
balls[balls.length-1].shoot();
  }

}

