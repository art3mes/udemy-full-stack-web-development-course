var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern=[];
var gameStarter=0;
var level=0;

function nextSequence(){
    level++;
    var randomChosenColor=buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(180).fadeIn(180);
    playSound(randomChosenColor);
    
}
function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $('.'+currentColor).removeClass('pressed');
    },150);
}
$(".btn").click(function(event){
    var userChosenColor=event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});
$(document).keypress(function(event){
    if((event.key=="a"||event.key=="A") && gameStarter=="0"){
        $("h1").text("Level "+level);
        nextSequence();
        gameStarter=1;
    }
}); 

