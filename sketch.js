const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="onSling";
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(550,170,70,70);
    
    box2 = new Box(625,170,70,70);
   

    box3 = new Box(699,170,70,70);
    box4 = new Box(585,100,70,70);
   

    box5 = new Box(655,100,70,70);
    box6 = new Box(625,30,70,70);
   

    bird = new Bird(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("cyan");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
  
    box3.display();
    box4.display();
  
    box5.display();
    box6.display();
    
    bird.display();
    platform.display();
   
    slingshot.display();    
}

function mouseDragged(){
   // if (gameState!=="launched") {

    
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed ( ) {
    if (keyCode===32) {
    slingshot.attach(bird.body);
    }
}