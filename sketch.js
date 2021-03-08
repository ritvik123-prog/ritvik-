var movingbox,fixedbox,box1,box2,box,box3
function setup() {
  createCanvas(800,400);
  movingbox=createSprite(400, 200, 50, 80);
  movingbox.shapeColor="gold"
  fixedbox=createSprite(200, 200, 80, 30);
  fixedbox.shapeColor="gold"
  box=createSprite(100,20,40,30)
box.shapeColor="blue"
box1=createSprite(120,60,40,30)
box1.shapeColor="yellow"
box2=createSprite(140,100,40,30)
box2.shapeColor="purple"
box3=createSprite(180,140,40,30)
box3.shapeColor="orange"

}
function draw() {
  background(255,255,255);  
movingbox.x=mouseX
movingbox.y=mouseY

if(IsTouching(box3,movingbox)){
  movingbox.shapeColor="green"
  box3.shapeColor="green"
}
else{
movingbox.shapeColor="gold"
box3.shapeColor="gold"
}
  drawSprites();
}
