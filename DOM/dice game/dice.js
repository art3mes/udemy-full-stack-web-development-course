var diceNum=Math.floor(Math.random()*6)+1;


function changePicture()
{
    document.querySelector(".img1").setAttribute("src","images/dice"+diceNum+".png");
}

