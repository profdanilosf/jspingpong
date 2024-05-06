//variáveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let  diametro= 15;
let raio = diametro/2

//váriáveis da raquete
let xRaquete=5;
let yRaquete=150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// váriaveis do oponente
let xRaqueteOponente = 390;
let yRaqueteOponente =150;
let velocidadeYOponente;
    

//variáveis velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha()
  verificaColisaoBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  
  
  
 
  
}

function mostraBolinha(){
  circle(xBolinha ,yBolinha,diametro);
  
  }
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBolinha(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}
function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }

}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}