
function Game(){
 this.solution;
 this.wrongGuesses = 0;
 this.answers = [];
 this.addanswer = function(answer){
 this.answers.push(answer);
 };

// randomly selects an game answer
 this.randomanswer = function(){
  var counter = 1;
  var num = Math.floor(Math.random() * this.answers.length);
  solution = this.answers[num].answer;
  return this.answers[num];
 };
}

// object that holds the answers and hints
function Answers(answer,hint){
  this.answer = answer;
  this.hint = hint;
  this.hints = [];
}

// variables of the word answers and their hint

var president = new Answers("kennedy", "U.S. president");
var baseball = new Answers("marlins", "Baseball team");
var trout = new Answers("rainbow", "Species of trout");
var football = new Answers("packers", "Football team")
var car = new Answers("ferrari", "Car manufacturer");
var artist = new Answers("vangogh", "Artist");
var basketball = new Answers("thunnder", "Basketball team")
var city = new Answers("belfast", "N. Ireland capital city");
var shoe = new Answers("salomon", "Shoe brand")
var game = new Game();

game.addanswer(president);
game.addanswer(baseball);
game.addanswer(trout);
game.addanswer(artist);
game.addanswer(football);
game.addanswer(basketball);
game.addanswer(car);
game.addanswer(city);
game.addanswer(shoe);
 
// clicking the Next word button gets the random word and hint, removes any letters from previous round
$(document).ready(function(){
  $("#next").click(function(){
    $("#hint").text(game.randomanswer().hint);
    // remove existing letters
  for (var i = 0; i<7; i++) {
    document.getElementsByTagName('h1')[i].innerText = "";
   }
   //reset wrong guesses
   game.wrongGuesses = 0;

// returns any "wrong answer" red cirles back to green on the click of next word button
  document.getElementById('circle1').style.backgroundColor = '#00FF00'; 
  document.getElementById('circle2').style.backgroundColor = '#00FF00';
  document.getElementById('circle3').style.backgroundColor = '#00FF00';
  }); 
});

// upon keypress changes from charcode to letters
// as user chooses incorrect letters, one of the green circles turns red until all 3 are red 
$(document).keypress(function(e) {
  var letter = String.fromCharCode(e.keyCode);
  if(solution.search(letter) == -1) {
    game.wrongGuesses += 1;
    document.getElementById('circle' + game.wrongGuesses).style.backgroundColor = '#FF0000';
  }else{
    //get rid of the letter and all the duplicates.
    while(solution.search(letter) != -1){
    var index = solution.indexOf(letter);
    solution = setCharAt(solution, index, '#');
    document.getElementsByTagName('h1')[index].innerText = letter;
    }
  }
});

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}






