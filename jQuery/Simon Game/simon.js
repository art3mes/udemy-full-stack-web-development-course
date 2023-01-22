var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern=[];

function nextSequence(){
    var randomChosenColor=buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(180).fadeIn(180);
    playSound(randomChosenColor);
    
}
$(".btn").click(function(event){
    var userChosenColor=event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

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
