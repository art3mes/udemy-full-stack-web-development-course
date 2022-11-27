function add(n1,n2){
    return n1+n2;
}
function sub(n1,n2)
{
    return n1-n2;
}
function mul(n1,n2)
{
    return n1*n2;
}
function div(n1,n2)
{
    return n1/n2;
}
console.log("add, sub, mul, div are operators. (num1,num2,operator)");

function calc(n1,n2,operator)
{
    return operator(n1,n2);
}