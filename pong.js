//variáveis da bolinha
let xBall = 300;
let yBall = 200;
let diametro = 18;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBall = 6;
let velocidadeYBall = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;



function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();

  
  
  function mostraBolinha() {
    
    circle(xBall, yBall, diametro);
    
  }
  
  function movimentaBolinha() {
    
    xBall += velocidadeXBall;
    yBall += velocidadeYBall;
    
  }
  
  function verificaColisaoBorda() {
    
    if (xBall + raio > width || xBall - raio < 0) {
    
    velocidadeXBall *= -1;
    
    }
    
    if(yBall + raio > height || yBall - raio < 0){
      velocidadeYBall *= -1;
    }
  }
    
  function mostraRaquete() {
    
      rect(xRaquete, yRaquete, comprimento, altura);
    
  }
  
  function movimentaRaquete() {
    
    if(keyIsDown(UP_ARROW)){
      
    yRaquete -= 10;
      
    }
     if(keyIsDown(DOWN_ARROW)){
      
    yRaquete += 10;
      
    }
  }
    
  
  
}