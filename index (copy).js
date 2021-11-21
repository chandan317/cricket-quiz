var readlineSync = require("readline-sync")


var score =0;

//input >> processing>> output

var userName =readlineSync.question("what's your name?  ");

console.log("Welcome "+ userName  +   "  to play quiz on Cricket");

console.log("--------------------------------------");

//play function

function play(question,answer){
  var userAnswer =readlineSync.question(question);
  
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("right!");
    score =score+1;
    

  }else{
    console.log("wrong!")
    }
    
  console.log("current score",score);
  console.log("------------------------------------------");
}

/*play(" who is the 1st t20 worldcup winner???  ","India");
play("Captain of team India in test cricket team??? ","virat");
*/

//array of objects

var questions = [{
  question:" who is the 1st t20 worldcup winner???  ",
  answer:"India"
},
{question:"Captain of team India in test cricket team??? ",
answer:"virat"

},
{
  question:"The wall of Indian cricket:  ",
  answer:"RahulDravid"
},
{
  question:"Mr360 of RCB:  ",
  answer:"ABD"
},
{
  question:"Cool Captain : ",
  answer:"Dhoni"
}];

//loop

for(var i=0;i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Yay! you scored :  "+ score +"  on 5");