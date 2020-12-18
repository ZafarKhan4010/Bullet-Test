var wall;
var bullet,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

 thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
 

 bullet=createSprite(50,200,50,5);
 bullet.velocityX=speed;
 bullet.shapecolor=color(255);


 wall=createSprite(1500,200,60,thickness,height/2);
 wall.shapeColor=color(80,80,80);

}

function draw() {
  background("darkBlue");  
   
  if(hasCollided(bullet,wall)){
  
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
      }
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }
    
  
 



  drawSprites();
}

function hasCollided(Lbullet,Lwall)
  {
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return  true;
  }
    return false; 
  
    
        
      
      
    
        
}
