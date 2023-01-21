var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var green = new Audio('sounds/green.mp3');
var red = new Audio('sounds/red.mp3');
var blue = new Audio('sounds/blue.mp3');
var yellow = new Audio('sounds/yellow.mp3');


function nextSequence(){
    var randomChosenColor=buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(180).fadeIn(180);
    red.play();

}
