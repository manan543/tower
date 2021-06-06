const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var holder,ball,ground
var stand1,stand2
var ball
var slingshot 
var polygonimg

function preload(){
    polygonimg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground=new Ground(450,390,900,20);
    stand1=new Stand(390,300,250,10);
    stand2=new Stand(700,200,200,10);
    block1=new  Block(312,275,30,40);
    block2=new  Block(320,280,30,40);
    block3=new  Block(328,285,30,40);
    block4=new Block(340,290,30,40);
    ball=Bodies.circle(200,200,20);
    block5=new Block(352,295,30,40);
    block6=new Block(360,293,30,40);
    block7=new Block(370,297,30,40);
    block8=new Block(620,175,30,40);
    block9=new Block(630,180,30,40);
    block10=new Block(649,185,30,40);
    block11=new Block(656,190,30,40);
    block12=new Block(673,195,30,40);
    block13=new Block(682,200,30,40);



    World.add(world,ball)
    slingshot=new SlingShot(this.ball,{
        x:100,y:200
    })
}
function draw(){
    background("green")
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    fill("gold")
    image(polygonimg,ball.position.x,ball.position.y,40,40)
    slingshot.display()
   
}