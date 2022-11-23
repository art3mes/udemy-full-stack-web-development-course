

function changePicture()
{
    var diceNum=Math.floor(Math.random()*6)+1;
    var diceNum2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+diceNum+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+diceNum2+".png");

    if(diceNum<diceNum2)
    {
        document.querySelector(".container h1").innerHTML="Player 2 WINS 🚩";
    }
    else if(diceNum===diceNum2)
    {
        document.querySelector(".container h1").innerHTML="Its a TIE! ";
    }
    else{
        document.querySelector(".container h1").innerHTML="🚩 PLayer 1 WINS!"; 
    }
}

