var list=[];
var c=1;

function fizzbuzz() {

    
    if(c%5===0 && c%3===0)
    {
        list.push("fizzbuzz");
       
    }
    else if(c%5===0)
    {
        list.push("buzz");
       
    }
    else if( c%3===0)
    {
        list.push("fizz");
       
    }
    else{
        list.push(c);
        
    }
    c++;
    console.log(list);
}
