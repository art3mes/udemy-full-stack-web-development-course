var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern=[];
var gameStarter=0;
var level=0;
var counter=0;

function nextSequence(){ 
    
    userClickedPattern=[];
    var randomChosenColor=buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(180).fadeIn(180);
    playSound(randomChosenColor);  
}
function playSound(name){
    // var audio = new Audio('sounds/'+name+'.mp3');
    // audio.play();
}
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $('.'+currentColor).removeClass('pressed');
    },100);
}
$(".btn").click(function(event){                                            //will work when user will press a button
    var userChosenColor=event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    answerChecker();
});

function answerChecker(){
    if(gamePattern[counter]==userClickedPattern[counter]){
        counter++;
        if(level===(userClickedPattern.length-1)){
            var judge=arrayComparator(gamePattern,userClickedPattern);        
            if(judge===true){
                level++;
                setTimeout(function(){
                    $("h1").text("Level "+level);
                },200);
                counter=0;
                setTimeout(nextSequence, 700); 
            }
        }
    }    
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        
    }
}
// function startOver(){
//     console.log("inside startover");
    
//     if(gameStarter!=1){
//         $(document).keypress(function(){
//             level=0;
//             gamePattern=[];
//             userClickedPattern=[];
//             gameStarter=1;   
//             nextSequence();  
//         });         
//     }
// }  

$(document).keypress(function(event){                                    //starting the game. first keypress
    if((event.key=="a"||event.key=="A") && gameStarter==0){
        $("h1").text("Level "+level);
        nextSequence();
        gameStarter=1;
    }
}); 
function arrayComparator(array1,array2){                                 //array comparator
    var l1=array1.length;
    var l2=array2.length;
    var counter=0;
    if(l1!=l2){
        return false;
    }
    else{
        for(var a=0;a<l1;a++){
            if(array1[a]!=array2[a]){
                counter=1;
            }
        }
        if(counter==1){
            return false;
        }
        else{
            return true;
        }
    }
}