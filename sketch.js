var cube;

function setup() {
  createCanvas(400,400);
  cube = createSprite(200,200,20,20);
}

function draw() 
{
   background("black");
   if(keyIsDown(RIGHT_ARROW))
   {
     cube.position.x=cube.position.x+5;
   }
   if(keyIsDown(LEFT_ARROW))
   {
     cube.position.x=cube.position.x-5;
   }
   if(keyIsDown(UP_ARROW))
   {
     cube.position.y=cube.position.y-5;
   }
   if(keyIsDown(DOWN_ARROW))
   {
     cube.position.y=cube.position.y+5;
   }
  drawSprites();
}




