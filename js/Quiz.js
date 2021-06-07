class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    console.log(gameState);
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    var title;
    title = createElement('h1');
    title.html("Results: ");
    title.position(350, 0);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    
    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("NOTE: Contestants who answered correctly are highlighted in green!",130, 230);
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    var i = 50;
    for (var plr in allContestants){
      var correctAns = "2" 
      if (correctAns === allContestants[plr].answer){
        fill("green");
      } else {
        fill("red");
      }
      
      text(allContestants[plr].name+ ": " +allContestants[plr].answer, 300, 250+i);
      i += 50;
    }

    
  }

}
