var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var wall1, wall2, wall3;
var wall1Sprite, wall2Sprite, wall3Sprite;
var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage('helicopter.png');
	packageIMG = loadImage('package.png');
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite = createSprite(width / 2, 80, 5, 15);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);

	packageBody = Bodies.circle(width / 2, 200, 20, {restitution: 0.5, isStatic: true});
	World.add(world, packageBody);

	wall1 = Bodies.rectangle(400, 650, 200, 20, {restitution: 0.1, isStatic: true});
	World.add(world, wall1);

	wall2 = Bodies.rectangle(300, 610, 20, 100, {restitution: 0.1, isStatic: true});
	World.add(world, wall2);

	wall3 = Bodies.rectangle(500, 610, 20, 100, {restitution: 0.1, isStatic: true});

	wall1Sprite = createSprite(400, 650, 200, 20);
	wall2Sprite = createSprite(300, 610, 20, 100);
	wall3Sprite = createSprite(500, 610, 20, 100);

	wall1Sprite.shapeColor = '#FF0000';
	wall2Sprite.shapeColor = '#FF0000';
	wall3Sprite.shapeColor = '#FF0000';

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, {isStatic: true});
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	keyPressed();
	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}
