class Form{
constructor(){
this.title1 = createElement('h2');
this.title2 = createElement('h3');
this.title3 = createElement('h4');
this.title4 = createElement('h4');
this.title5 = createElement('h4');
this.title6 = createElement('h4');
this.input1 = createInput("Enter your name here..");
this.input2 = createInput("Enter corrcet option no.")
this.button = createButton("submit");
this.title7 = createElement('h2');
this.name = null;
this.answer = 0;
this.index = null;

}
display(){
this.title1.html("MyQuiz Game");
this.title1.position(400,10);

this.title2.html("Question:- What starts with and ends with letter 'E', but has only one letter?");
this.title2.position(200,50);

this.title3.html("1:Everyone");
this.title3.position(200,70);

this.title4.html("2:Envelope");
this.title4.position(200,90);

this.title5.html("3:Estimate");
this.title5.position(200,110);

this.title6.html("4:Example");
this.title6.position(200,130);

this.input1.position(300,200);
this.input2.position(500,200);

this.button.position(400,230);
 
this.button.mousePressed(()=>{
    playerCount+=1;
    this.index = playerCount;
    this.name = this.input1.value();
    this.answer = this.input2.value();
    
   // updateplayerCount(playerCount);
})

}
updateplayersinfo(){
  if(this.index != null ){
    var playerindex = "players/player"+this.index;
    database.ref(playerindex).set({
        name: this.name,
        answer: this.answer
    })
  }
}
getplayersinfo(){
   var allplayersinfo = database.ref('players');
   allplayersinfo.on("value",function(data){
    allplayers = data.val();
   })
}
//function to update player count
 updateplayerCount(count){
    database.ref('/').update({
      playerCount: count
    })
  }
  // function to update gamestate
   updategameState(state){
    database.ref('/').update({
      gameState: state
    })
  }
start(){
this.title1.hide();
this.input1.hide();
this.input2.hide();
this.button.hide();
this.title7.html("Result of the Quiz");
this.title7.position(400,10)
if(allplayers!=undefined){
    fill('blue');
textSize(12);
text("*NOTE:Contestant who answered correct are highlighted in green color",200,200);
var y = 230;
for(var plr in allplayers){
    var correctAns = 2;
    
    if( allplayers[plr].answer == 2)
        fill("green");
    else  
         fill("red");

  textSize(15);
  text(allplayers[plr].name +":"+allplayers[plr].answer,200,y);
  y=y+30;
          
    
}
}
}
}