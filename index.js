function arraysAreIdentical(arr1, arr2){
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
function generateRundomNumber()
{
  return Math.floor(Math.random()*4);
}
//buttons
$(".blue").on("click", function() {
  blueSound();
  buttonsClicked.push("blue");
  checkSound();
  $(".blue").addClass("pressed");
  setTimeout(()=>$(".blue").removeClass("pressed"),100);
});

$(".green").on("click", function() {
  greenSound();
  buttonsClicked.push("green");
  checkSound();
  $(".green").addClass("pressed");
  setTimeout(()=>$(".green").removeClass("pressed"),100);
});

$(".red").on("click", function() {
  redSound();
  buttonsClicked.push("red");
  checkSound();
  $(".red").addClass("pressed");
  setTimeout(()=>$(".red").removeClass("pressed"),100);
});

$(".yellow").on("click", function() {
  yellowSound();
  buttonsClicked.push("yellow");
  checkSound();
  $(".yellow").addClass("pressed");
  setTimeout(()=>$(".yellow").removeClass("pressed"),100);
});

//sounds
function blueSound() {
  var audio = new Audio("sounds/blue.mp3");
  audio.play();
  $(".blue").addClass("pressed");
  setTimeout(()=>$(".blue").removeClass("pressed"),100);
}

function greenSound() {
  var audio = new Audio("sounds/green.mp3");
  audio.play();
  $(".green").addClass("pressed");
  setTimeout(()=>$(".green").removeClass("pressed"),100);
}

function redSound() {
  var audio = new Audio("sounds/red.mp3");
  audio.play();
  $(".red").addClass("pressed");
  setTimeout(()=>$(".red").removeClass("pressed"),100);
}

function yellowSound() {
  var audio = new Audio("sounds/yellow.mp3");
  audio.play();
  $(".yellow").addClass("pressed");
  setTimeout(()=>$(".yellow").removeClass("pressed"),100);
}

//function for sound that indicates which button to click
function playSound() {
  switch (randomSound) {
    case 0:
      blueSound();
      soundsPlayed.push("blue");
      break;
    case 1:
      greenSound();
      soundsPlayed.push("green");
      break;
    case 2:
      redSound();
      soundsPlayed.push("red");
      break;
    case 3:
      yellowSound();
      soundsPlayed.push("yellow");
      break;
  }
}

function checkSound()
{
  if(arraysAreIdentical(buttonsClicked, soundsPlayed) && stateOfGame !== "Start")
  {
    if(buttonsClicked.length == soundsPlayed.length)
    {
      $("#level-title").text(++level + " level");
      randomSound = generateRundomNumber();
      setTimeout(playSound, 1500);
      buttonsClicked = [];
    }
    else {return;}

  }
  else
  {
    $("#level-title").text(" Game Over, Press Any Key to Restart");
    level = 0;
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    stateOfGame = "Start";
    buttonsClicked = [];
    soundsPlayed = [];
  }
}

function startGame() {
  if (stateOfGame === "Start") {
    $("#level-title").text("1 level");
    playSound();
    stateOfGame = "In progress";
  }
}

var buttonsClicked = [];
var soundsPlayed = [];
var stateOfGame = "Start";
var level = 0;
var randomSound = generateRundomNumber()
//If you press the key at the beginning of the game, the name changes to 1 level and the first sound is played.
$(document).on("keydown", startGame);
