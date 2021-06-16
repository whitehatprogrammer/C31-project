var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 // square brackets represent that the particular variable is an array .
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 

  //create 1st row of plinko objects
  for (var j = 90; j <=800; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }

  //create 2nd row of plinko objects
  for (var j = 40; j <=750; j=j+50) 
  {
    plinkos.push(new Plinko(j,130));
  }

  //create 3rd row of plinko objects
for (var j = 90;j<= 800 ; j=j+50)
{
  plinkos.push(new Plinko(j,210))
}

  //create 4th row of plinko objects
for (var j = 30 ; j<=700 ; j=j+50){

  plinkos.push(new Plinko(j,290))
}
  //create 5th row of plinko objects
for (var j = 90 ; j<=770 ; j=j+50){

  plinkos.push(new Plinko(j,370))
}
  //create 6th row of plinko objects
for (var j = 30 ; j<=700 ; j=j+50){

  plinkos.push(new Plinko(j,450))
}

  //create particle objects
  if(frameCount%30 === 0){
    particles.push(new Particle(random(10,790),random(0,10),random(8,10)));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)

  if(frameCount%60 === 0){
    particles.push(new Particle(random(10,790),random(0,10),10));
 }
    
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }

}