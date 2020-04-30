
var r = 124;
var g = 46;
var b=68;


function setup(){
noStroke();
  createCanvas(1200,400);
}


function draw(){
  background(r,g,b);
  let value = 25;
  let m = map(value, 0, 100, 0, width);
  ellipse(m, 50, 10, 10);

  let x1 = map(mouseX, 0, width, 25, 75);
  ellipse(x1, 25, 25, 25);
  let x2 = map(mouseX, 0, width, 0, 100, true);
  ellipse(x2, 75, 25, 25);

}