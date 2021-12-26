const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var score = 0;
var ground;
var ground2, ground3;
var block1, block2, block3, block4, block5;
var ball, ballImg;
var backgroundImg;
var obs1, obs2;
var blocks = [];
var gameState = 'START';


function preload(){
  backgroundImg = loadImage("background.jpg");
  ballImg = loadImage("ball.png");
}

function setup() {
  createCanvas(400,600);

if(gameState == 'START'){

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200, 610, 410, 20);
  console.log(ground)

  ground2 = new Ground(0, 200, 20, 610);
  ground3 = new Ground(400, 200, 20, 610);


  block1 = new Block(80, 200, 50, 100);
  blocks.push(block1)
 
  block2 = new Block(130, 200, 50, 100);
  blocks.push(block2)

  block3 = new Block(180, 200, 50, 100);
  blocks.push(block3)

  block4 = new Block(230, 200, 50, 100);
  blocks.push(block4)

  block5 = new Block(280, 200, 50, 100);
  blocks.push(block5)

  ball = new Ball(200, 400, 50);


  rectMode(CENTER);
}



}


function keyPressed(){

	if(keyCode === UP_ARROW && gameState == 'PLAY'){
		
		Matter.Body.applyForce(ball.body, {x:0, y:0}, {x :0, y :-600});

	}

  if(keyCode === LEFT_ARROW && gameState == 'PLAY'){

    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x :-200, y :0});

  }

  
  if(keyCode === RIGHT_ARROW && gameState == 'PLAY'){

    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x :200, y :0});

  }

}

function draw() 
{
  background(51);

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  if(gameState == 'START' && keyCode == DOWN_ARROW){
    gameState = 'PLAY';
    console.log(gameState); 

  }

  ground.show();
  ball.show();
  

 if(gameState == 'START'){

    textSize(16)
    fill("blue");
    text("Welcome to the bowling alley! Press down arrow to start", 0, 330)
    text("How to play: press left and right arrow to move around", 10, 370);
    text(" and up arrow to shoot! Good luck", 80, 400);

  }

  if(gameState == 'END'){

   gameOver();
  }


  collisionWithBlocks();

  fill("white")
  textSize(20)
  text("Score:" + score, 0, 20);


}

function collisionWithBlocks(){

  for(var i = 0; i < blocks.length; i++){

    blocks[i].show();

   if (ball !== undefined && blocks[i] !== undefined) {

   var collision = Matter.SAT.collides(ball.body, blocks[i].body);

   if(collision.collided){

    blocks[i].remove(i);
    score +=1;
    console.log(blocks.length);
  }
  
}

if(blocks.length === 0){
  gameState = "END";
}

}

}


function gameOver() {
  swal(
    {
      title: `You Win!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlF2h0MY6NVdvgGIxo3G8hmNIhXqB1-Kj0g&usqp=CAU",
      imageSize: "200x200",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}