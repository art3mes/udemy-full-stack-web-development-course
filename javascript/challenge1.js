function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c=a;
a=b;
b=c;


    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


//BMI calculator
function bmiCalculator(weight,height)
{
    return Math.round((weight/(height*height)));
}
var bmi=bmiCalculator(65,1.8);
console.log(bmi);