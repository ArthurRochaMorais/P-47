var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var player,imgPlayer;
var moeda0,imgMoeda;
var chaoInvisivel,ImgFundo;
var chao,chao2,imgChao;
var inimigo
var boss,imgBoss;
var engine,world;
var Canvas
var EstadoJogo = 1;
var menu;
var fundodomenu
var SelecionarGrupoMoedas
var imageAtk,imageDef;
var contagemMoedas1 = 0;
var contagemMoedas2 = 0;
var contagemMoedas3 = 0;
var grupoAnterior = 0;
var moedas = 0;
var fundoBoss
var playerBoss;
var barreira
var barraX
var barraY
var canvasBoss;


function preload(){
  ImgFundo = loadImage("fundo4.jpg");
  //imgMoeda = loadImage("moeda1.png");
  //imgInimigo = loadImage("");
  imgChao = loadImage("chao1.png");
  //imgPlayer = loadImage("");
  //fundoBoss = loadImage("");
}
function setup(){
  fundoBoss = new chamarBoss();
  fundoBoss.setElementsPosition();
  fundoBoss.hide();
  Canvas = createCanvas(1920,933);
 // moeda0.addImage("imgMoeda0",imgMoeda);
  chao = createSprite(900,645,50,50);
  chao2 = createSprite(2765,645,50,50);
  chao.addImage("imagemChao",imgChao);
  chao2.addImage("imagemChao",imgChao);
  //player - new Player(100,645);
  player = createSprite(100,645,30,100);
  player.setCollider("rectangle",0,0,player.width,player.height);
  player.debug = false
  //player.addImage("ImagemPlayer",imgPlayer);
  player.scale = 3
  engine = Engine.create();
  world = engine.world;
  menu = new Menu();
  menu.setElementsPosition();
  menu.hide();
  chaoInvisivel = createSprite(960,700,1920,10);
  barreira = createSprite(-100,450,10,933);
  chaoInvisivel.visible = false
  grupoMoedas = new Group();
  grupoInimigos = new Group();

}
function draw(){
  
  
  player.collide(chaoInvisivel);
  console.log(player.y);

  if(barreira.isTouching(grupoInimigos)){
    grupoInimigos[0].destroy();
  }
  if(barreira.isTouching(grupoMoedas)){
    grupoMoedas[0].destroy();
  }
  if(EstadoJogo === 1){
    background(ImgFundo);
    player.velocityY += 2
    menu.mostrar();
    if(player.isTouching(grupoMoedas)){    
      grupoMoedas[0].destroy();
      moedas += 1;
    }
    if(player.isTouching(grupoInimigos)){    
      grupoInimigos[0].destroy();    
      moedas -= 1;  
    }
  
    textSize(25);
    text("Moedas : "  + moedas,1700,100);
    chao.velocityX = -5
    chao2.velocityX = -5
    
    player.display();
    
    gerarMoedasAleatorias(); 
    if(moedas > 0 ){
    gerarInimigosAleatorios();
    }
    grupoMoedas.setVelocityXEach(-8);
    grupoInimigos.setVelocityXEach(-8);
      if(chao.x < -950){
        chao.x = 1825
      }
      if(keyDown("SPACE") && EstadoJogo === 1 && player.y > 540){
        player.velocityY = -30     
      }
      if(keyDown("UP_ARROW")){
        EstadoJogo = 2
      }
      if(keyDown("RIGHT_ARROW")){
        EstadoJogo = 3
      } 
  }
  if(EstadoJogo === 2 ){
    background(ImgFundo);
    chao.velocityX = 0
    menu.display();
    grupoMoedas.setVelocityXEach(0);
    grupoInimigos.setVelocityXEach(0);
    textSize(25);
    text("Moedas : "  + moedas,1700,100);
    if(keyDown("LEFT_ARROW") && EstadoJogo === 2){
      menu.hide();
      EstadoJogo = 1
    }
  }
  if(EstadoJogo === 3){
    
    //background();
    grupoMoedas.destroyEach();
    grupoInimigos.destroyEach();
    fundoBoss.display();

  }
  drawSprites();

}
function gerarMoedasAleatorias(){
  if (frameCount % 60 === 0) {
    moeda0 = createSprite(windowWidth,120,40,10);
    moeda0.y = Math.round(random(200,300));
    //moeda0.addImage(imgMoeda);
    moeda0.velocityX = -8;
   grupoMoedas.add(moeda0);
  }
  
}
function gerarInimigosAleatorios(){
  if (frameCount % 100 === 0) {
    inimigo = createSprite(windowWidth,120,40,10);
    inimigo.y = 680;
    //inimigo.addImage(imgInimigo);
    inimigo.velocityX = -8;
   grupoInimigos.add(inimigo);
  }
}
    
