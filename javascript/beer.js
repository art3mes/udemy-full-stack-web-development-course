var a=99;

while(a>=1)
    {
        if(a===1)
        {
           console.log(a+" bottles of beer on the wall, "+a+" bottles of beer.\nTake one down and pass it around, no bootles of beer on the wall."); 
        }
        else
        console.log(a+" bottles of beer on the wall, "+a+" bottles of beer.\nTake one down and pass it around, "+(a-1)+" bootles of beer on the wall.");
        
        a--;
    }