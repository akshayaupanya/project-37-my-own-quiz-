var canvas;
var database;
 var gameState = 0 ;
 var playerCount= 0;
 var quizform;
var allplayers;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quizform = new Form();

  //function to read player count
var playerCountinfo = database.ref('playerCount');
playerCountinfo.on("value",function(data){
  playerCount = data.val();
});
// function to read gamestate
var gameStateinfo = database.ref('gameState');
gameStateinfo.on("value",function(data){
  gameState = data.val();
});


}


function draw(){
  background("pink");
  quizform.updateplayerCount(playerCount);
  quizform.updategameState(gameState);
  quizform.updateplayersinfo();
  quizform.getplayersinfo();
  
if(gameState===0){
quizform.display()
}
if(playerCount === 4){
  gameState =1;
 
}
if(gameState === 1){
  quizform.start()
}
  
}
