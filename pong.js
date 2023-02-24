
let xBall = 300;
let yBall = 200;
let diametro = 18;
let raio = diametro /2;

let velocidadeXBall = 6;
let velocidadeYBall = 6;



function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  circle(xBall, yBall, diametro);
  xBall += velocidadeXBall;
  yBall += velocidadeYBall;
  
  if (xBall + raio > width || xBall - raio < 0) {
    
    velocidadeXBall *= -1;
    
  }
  if(yBall + raio > height || yBall - raio < 0){
    velocidadeYBall *= -1;
  }
  
  
  
}