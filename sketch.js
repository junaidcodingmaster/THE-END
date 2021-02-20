var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4;

var bike1img,bike2img,bike3img,bike4img,groundimg,trackjpg;

var gameover;

function preload(){
  bike1img = loadImage('images/bike1.png');
  bike2img = loadImage('images/bike2.png');
  bike3img = loadImage('images/bike3.png');
  bike4img = loadImage('images/bike4.png');

  groundimg = loadImage('images/ground.png');
  trackjpg = loadImage('images/track.jpg');

  gameover = loadImage('images/gameover.png');
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
  textsize(25);
  text("game over" , displayWidth/2 - 100, 0);
  }
}
