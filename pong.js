let xBall = 300;
let yBall = 200;
let diametro = 18;
let velocidadeXBall = 5;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBall, yBall, diametro);
  xBall += velocidadeXBall;
}