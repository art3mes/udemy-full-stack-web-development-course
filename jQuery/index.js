$(document).ready(function(){                 /*runs when the jQuery CDN is ready. a type of failsafe. so you can place the jQuery CDN anywhere*/
                                              /* to avoid using this. transfer the CDN and script tags to the last of the body tag*/

$("buttons");                     /*will select all buttons */
$("h1");                          /*will select h1*/

$("css-selector").addClass("class1 class2 class3");         /*will add a class*/
$("css-selector").removeClass("class1 class2");        /*to remove class*/
$("css-selector").hasClass("class1 class2 class3");          /*returns boolean/
console.log($("h1").css("color"));                            /*will get the color*/

$("h1").css("color","blue");                               /*will change the color*/







});                                                   