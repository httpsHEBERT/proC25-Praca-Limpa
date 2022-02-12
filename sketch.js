
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world, engine;

var praça, trilha, solo, lixeira, papel, seta, setaImg;

function preload(){
	praça = loadImage("Images/praça.png");
	setaImg = loadImage("Images/seta.png");
	trilha = loadSound("Sound/trilha.mp3");
}

function setup(){

	createCanvas(windowWidth, windowHeight-4);

	engine = Engine.create();
	world = engine.world;
	
	solo = new Solo(width/2, height-25, width, 50);
	lixeira = new Lixeira(width-250, height-60);
	papel = new Papel(width-width+300, height-50, 70, 70);

	seta = createSprite(width-width+60, height-height+65);
	seta.addImage(setaImg);
	seta.scale = 0.4;

	trilha.setVolume(0.1);
	trilha.loop();

	Engine.run(engine);
}


function draw(){

  background(praça);
  drawSprites();
  arremeço();
  display();
}

function display(){
	papel.display();
  	lixeira.display();
}

function parar(){
	Matter.Body.setStatic(papel, true);
	Matter.Body.applyForce(papel.body, papel.body.position, {x:-6, y:-22});
}

function cair(){
	Matter.Body.applyForce(papel.body, papel.body.position, {x:6, y:22});
	setTimeout(parar, 100);
}

function arremeço(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papel.body, papel.body.position, {x:8, y:-20});
		setTimeout(cair, 850);
	}
}

