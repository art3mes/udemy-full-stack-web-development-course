function handleClick()
{
    this.style.color="white";     //change color of each text to white

}

for(var a=0;a<document.querySelectorAll(".drum").length;a++)      // be specific in the class name. adding "button" will just loop through
                                                                  //all the buttons in the document;   
                                                                  //for(var a=0;a<7;a++) {}            itll also work ;)
{
    document.querySelectorAll("button")[a].addEventListener("click",handleClick);
    
}



