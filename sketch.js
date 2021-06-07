var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var bgColor = 0;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  console.log("setup");
  background("pink");
}


function draw(){
  
  /*if (bgColor == 1){
    background("yellow");
  } else {
    
  }*/
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
    

  }
  console.log("draw");
}
