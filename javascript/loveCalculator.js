//Math.random() generates 16 bits floating point number. never reaching 1
//pseudo random generator
//between 1 and 6, multiply it by 6 and add 1(to include 6 also in the list)

function input()
{
    name1=prompt("Enter your name: ");
    name2=prompt("Enter your significant other's name: ");
}
function calc()
{
    return Math.floor((Math.random()*100))+1;
}
var name1;
var name2;
input();
var love=calc();

if(love>70)
{
    alert(love+"%"+" COngrats.");
}
else{
    alert(love+"%");
}