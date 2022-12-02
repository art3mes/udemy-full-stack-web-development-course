
// be specific in the class name. adding "button" will just loop through all the buttons in the document;   
//for(var a=0;a<7;a++) {}            itll also work ;)

//handle click 
for(var a=0;a<document.querySelectorAll(".drum").length;a++)
{
    document.querySelectorAll("button")[a].addEventListener("click", function(){
        var buttonValue=this.innerHTML;         //this.style.color="white";     change color of each text to white
        handleClick(buttonValue);
    });   
}

//handle keyboard press
document.addEventListener("keydown",function(button_pressed){
    var key_press=button_pressed.key;
    handleClick(key_press);
});

//sound function
function handleClick(stimulus)
{
    switch (stimulus.toLowerCase()) 
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    
    
        default:
            console.log(buttonValue);
              break;
    }
}






