const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground2,ball;
var Paper;

function preload(){

}
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ground2_options={
isStatic:true

    }

    ground = Bodies.rectangle(250,370,200,20,ground_options);
    fill("black")
    World.add(world,ground);
    ground2=Bodies.rectangle(370,370,20,20,ground2_options)
    fill("red")

    World.add(world,ground)
    var paper_options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }

   
    dustbin1=createSprite(680,360,200,30)
    dustbin2=createSprite(590,330,20,35)
    dustbin3=createSprite(780,340,20,50)
dustbin1.shapeColor="red"
dustbin2.shapeColor="red"
dustbin3.shapeColor="red"
Paper=new paper(200,200,20,20,paper_options);
    console.log(ground);
}

function draw(){

    background(0);
    
    drawSprites();
    Paper.display();
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
    rectMode(CENTER)
rect(ground2.position.x,ground2.position.x,1000,20)

    //ellipseMode(RADIUS);
   // ellipse(paper.position.x, paper.position.y, 20, 20);
   

   
}

function keyPressed(){
if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body.position,paper.body.position,{x:85,y:-85})
}

}