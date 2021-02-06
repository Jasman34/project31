const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var maxDrops;
var i=0;

function preload(){
   
}

function setup(){
    var canvas=createCanvas(400,600); 
   engine = Engine.create();
    world = engine.world;

    //drops=new Drop()
    if(i>maxDrops, i++ ){
        drops.push(new Drop(random(400,400),random(400,400)));
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);
   // drops.display();
   // drops.display();
    
}   

