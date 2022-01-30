let xBolinha = 400
let yBolinha= 200
let diametro = 20
let velocidadeXBolinha= 6
let velocidadeYBolinha= 6
let raio = diametro/2
//variaveis raquete e oponente
let xBarra1 = 10
let yBarra1 = 150
let comprimentoBarra=10
let alturaBarra=100
let xBarra2= 780
let yBarra2= 150
velocidadeYOponente = 10
let chanceDeErrar = 0;

//placar do jogo
let meusPontos= 0;
let pontosOponente= 0;

//sons
let raquetada;
let ponto;
let trilha;


function setup() {
  createCanvas(800, 400);

}

function draw() {
  // variaveis da bolinha
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisao();
  //variaveis da raquete
  mostraBarra1(xBarra1,yBarra1);
  movimentaBarra1();
  verificaDefesa();
  //variaveis oponente
  mostraBarra1(xBarra2,yBarra2);
  movimentaBarra2();
  verificaDefesaOponente();
  Score();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function mostraBarra1(x,y){
  rect(x,y,comprimentoBarra,alturaBarra)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}

function colisao(){
  if(xBolinha+raio > width || xBolinha-raio < 0){
    velocidadeXBolinha *= -1
  }
  if(yBolinha+raio > height || yBolinha-raio < 0){
    velocidadeYBolinha*=-1
  }    
  }

function movimentaBarra1(){
  if(keyIsDown(LEFT_ARROW)){
    yBarra1 -= 8;
  }
  if(keyIsDown(RIGHT_ARROW)){
    yBarra1 += 8;
  }
}

function movimentaBarra2(){
  velocidadeYOponente = yBolinha - yBarra2 - comprimentoBarra/2 -30;
  yBarra2 += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar();
}

function verificaDefesa(){
  if(xBolinha - raio < xBarra1 + comprimentoBarra && yBolinha -raio < yBarra1 + alturaBarra && yBolinha+raio > yBarra1){
    velocidadeXBolinha *= -1;
    
  }
}

function verificaDefesaOponente(){
 if(xBolinha + raio > xBarra2 - comprimentoBarra && yBolinha -raio < yBarra2 + alturaBarra && yBolinha+raio > yBarra2){
    velocidadeXBolinha *= -1
   
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 50){
    chanceDeErrar = 51
    }
  }
  else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function Score(){
  fill(255)
  text(meusPontos,300,26)
  text(pontosOponente,476,26)
  
}
function marcaPonto(){
  if(xBolinha > 790){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1
  }
}