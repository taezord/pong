//variáveis da bolinha
let xBola = 300;
let yBola = 200;
let diametro = 18;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBola = 5;
let velocidadeYBola = 5;

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
  verificaColisaoRaquete();
  
  
  function mostraBolinha() {
    circle(xBola, yBola, diametro);
  }
  
  
  function movimentaBolinha() {
    xBola += velocidadeXBola;
    yBola += velocidadeYBola;
  }
  
  
  function verificaColisaoBorda() {
    if (xBola + raio > width || xBola - raio < 0) {
    velocidadeXBola *= -1;
    }
    if(yBola + raio > height || yBola - raio < 0){
      velocidadeYBola *= -1;
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
  
  
  function verificaColisaoRaquete(){
    
    if(xBola - raio < xRaquete + comprimento && yBola - raio < yRaquete + altura && yBola + raio > yRaquete){
      velocidadeXBola *= -1;
    }
    
  }
    
  
  
}