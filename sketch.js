var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var count = 0;
var particle;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
  ground.display();

  stroke(255);
  
  textSize(30);
  text("500", 15, 490);
  text("500", 95, 490);
  text("500", 175, 490);
  text("500", 255, 490);

  text("100", 335, 490);
  text("100", 415, 490);
  text("100", 495, 490);
  
  text("200", 575, 490);
  text("200", 655, 490);
  text("200", 735, 490);

  stroke("yellow")
  line(0, 450, 800, 450);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
       
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(plinkos.x <= 255 && plinkos.x >= 0){
      score = score + 500;
    }

    if(plinkos.x <= 495 && plinkos.x >= 335){
      score = score + 500;
    }

    if(plinkos.x <= 735 && plinkos.x >= 575){
      score = score + 500;
    }

}

function mousePressed(){
  particles.push(new Particle(mouseX, 25, 10,10));
  
}