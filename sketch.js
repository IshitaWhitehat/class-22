const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies; //name spacing

var myengine,myworld; // var to create an engine and world
var box,ground,hermione;

function setup() {
  createCanvas(800,400);
  
  myengine=Engine.create(); // it will create an engine by name my engine
  // when we create an engine a world gets created 
  //automatically called myengine.world
  myworld=myengine.world; // is again name spacing

var options= {
  isStatic:true,
}
box= Bodies.rectangle(400,200,100,100);
World.add(myworld,box);

var options_hermione={
  restitution:1,
}
hermione=Bodies.circle(200,100,30,options_hermione);
World.add(myworld,hermione);

var ball_options= {
  restitution:2,
  friction:0.4,
}
ball= Bodies.circle(200,100,20,ball_options);
World.add(myworld,ball);

ground= Bodies.rectangle(width/2,height-10,width,10,options);
World.add(myworld,ground);


}

function draw() {

  Engine.update(myengine);
  background(0); 
  fill("white"); 
  text(box.position.y,100,100);
  console.log(box);
  fill("yellow")
  rectMode(CENTER)
  rect(box.position.x,box.position.y,100,100);
  fill("brown")
  rect(ground.position.x,ground.position.y,width,10);
  fill("purple")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("pink")
  ellipse(hermione.position.x,hermione.position.y,30,30);
  
}

