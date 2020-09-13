var bullet, wall, bulletspeed, bulletweight, wallthickness;

function setup() {
  createCanvas(800,400);
  
  bulletspeed = random(223,421);
  bulletweight = random(40,82);

  wallthickness = random(22,83); // change this value

  bullet = createSprite(100,200,50,10);
  bullet.velocityX = 0.25*bulletspeed;

  wall = createSprite(700,200,wallthickness,70);
  
}

function draw() {
  background(0);  
  if(isTouching(bullet, wall))
  {
    bullet.velocityX = 0;
    walldamage = (0.5 * bulletweight * bulletspeed)/(wallthickness*wallthickness*wallthickness);
    
    if(walldamage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
    if(walldamage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }
  }
  
  drawSprites();
}