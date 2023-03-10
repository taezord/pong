//variáveis da bolinha
let xBola = 300;
let yBola = 200;
let diametro = 16;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBola = 5;
let velocidadeYBola = 5;

//variáveis da raquete
let xRaquete = 2;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;

let colisao = false;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let pontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolaNaoFicaPresa();
  
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
    
  
  
  function mostraRaquete(x, y) {
      rect(x, y, comprimento, altura);
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
  function verificaColisaoRaquete(x, y){
    
    colisao = collideRectCircle(x, y, comprimento, altura, xBola, yBola, raio);
    
    if(colisao){
      velocidadeXBola *= -1;
    }
    
  }
  

  
  function movimentaRaqueteOponente(){
     if(keyIsDown(87)){
    yRaqueteOponente -= 10;
    }
     if(keyIsDown(83)){
    yRaqueteOponente += 10;
    }
  }
  
  function incluiPlacar(){
    stroke(255)
;    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(pontos, 170, 26);
    fill(color(255,140, 0));  
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
  }
    
  function marcaPonto(){
    if (xBola > 590){
      pontos += 1;
    }
    if (xBola < 10) {
      pontosOponente += 1;
    }
    
  }
  
  
  function bolaNaoFicaPresa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}

  
}