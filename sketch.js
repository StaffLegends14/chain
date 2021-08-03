const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var rope1;
var karat,karatLink;
var Bunny;

function preload(){

  rabbit = loadImage("Rabbit-01.png");
  WaterMelon = loadImage("melon.png");
  Background = loadImage("background.png");

}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  var opt = {
    density: 0.001
  }

  ground = new Ground(width/2,height - 10,width,20);
  rope1 = new Rope(6,{x:width/2,y: 30})

  
  karat = Bodies.circle(300,300,20,opt)
  Matter.Composite.add(rope1.body,karat);

  karatLink = new Link(rope1,karat);

  Bunny = createSprite(width/2, height - 70,20,20);
  Bunny.addImage(rabbit);
  Bunny.scale = 0.2;

  button = createImg(`Named.png`);
  button.position(width/2 - 15,30);
  button.size(30,30) 
  button.mouseClicked(task)

}

function draw() 
{

  imageMode(CENTER)
  background(51);
  
  image(Background,width/2,height/2,500,700);

  Engine.update(engine);

  ground.display();
  rope1.show();

  image(WaterMelon,karat.position.x,karat.position.y,80,80);

  drawSprites();

}

function task(){

  karatLink.break();
  rope1.break();
  karatLink = null;

}




