//Create variables here
var dog,happyDog;
var database;
var foodS;
var foodStock;



function preload()
{
  //load images here
  i1=loadImage("images/doglmg.png");
  i2=loadImage("images/doglmg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(250,250);
  dog.addImage(i1);
  dog.addImage(i2);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here


}
function readStock(data){
  foodS=data.val();
  
}

function writeStock(x){
  if(x<=0){
   x=0 
  }


database.ref('/').update({
Food:x
})
}
