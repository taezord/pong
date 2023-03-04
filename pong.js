//variáveis da bolinha
let xBola = 300;
let yBola = 200;
let diametro = 21;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBola = 3;
let velocidadeYBola = 3;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;
let colisao = false;


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
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  
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
  function colisaoMinhaRaqueteBiblioteca(){
    
    colisao = collideRectCircle(xRaquete, yRaquete, comprimento, altura, xBola, yBola, raio);
    
    if(colisao){
      velocidadeXBola *= -1;
    }
    
  }
    
  
  
}