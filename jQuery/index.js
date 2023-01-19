$(document).ready(function(){                 /*runs when the jQuery CDN is ready. a type of failsafe. so you can place the jQuery CDN anywhere*/
                                              /* to avoid using this. transfer the CDN and script tags to the last of the body tag*/

$("buttons");                     /*will select all buttons */
$("h1");                          /*will select h1*/

$("css-selector").addClass("class1 class2 class3");         /*will add a class*/
$("css-selector").removeClass("class1 class2");        /*to remove class*/
$("css-selector").hasClass("class1 class2 class3");          /*returns boolean/
console.log($("h1").css("color"));                            /*will get the color*/

$("h1").css("color","blue");                               /*will change the color*/

$("class-selector").text("new to text to replace old one with");     /*will write <> tags as it is*/
$("class-selector").html("new text to replace old one.  can inject code lol");      /*same as innerHTML. can use tags to change */

$("img").attr("src");     /*will give source attribute of the img file*/
$("a").attr("href","http://www.yahoo.com");            /*will change the href attribute of "a" tag*/
$("h1").attr("class");                                     /*will give classes applied to h1 tag*/

/*for(var a=0; a<document.querySelectorAll("button").length;a++){
    document.querySelectorAll("button")[a].addEventListener("click",function(){
        document.querySelector("h1").style.color="purple";
    });
}*/

$("button").click(function (){
    $("h1").css("color","pink");                      /*both are doing the same job*/
});

$("input").keypress(function(event){         /*change input to document to log any keypresses*/
    console.log(event.key);                               /*gives the key pressed in the input tag*/
});

$(document).keypress(function(event){
    $("h1").text(event.key);                 /*will change the h1 to any key pressed*/
});

$("h1").on("mouseover", function(){           /*other way to add event listeners*/
    $("h1").css("color","gray");            
});
});                                                   