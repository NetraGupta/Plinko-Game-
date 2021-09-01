var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("black");
  textSize(35)
  text("500",10,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("200",730,550)
 
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

  //display the particles 

if(particles!=null) { particles.display(); 
  if (particles.body.position.y>780)
   { if (particles.body.position.x < 300) { score=score+500; particles=null;
     if ( count>= 5) gameState ="end"; } 
     else if (particles.body.position.x < 600 && particles.body.position.x > 301 ) { score = score + 100; particles=null; 
      if ( count>= 5) gameState ="end"; } 
      else if (particles.body.position.x < 900 && particles.body.position.x > 601 ) { score = score + 200; particles=null;
         if ( count>= 5) gameState ="end"; } }
}
text("score :"+score ,500,20)


}
function mousePressed(){
  particles=(new Particles(mouseX,0))
count++
}