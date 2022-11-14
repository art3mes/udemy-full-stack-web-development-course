//https://stanford.edu/~cpiech/karel/ide.html

// putting beeper in diagonal places
 function main(){
    putBeeper();
    work();
    work();
    work();
    work();
   
 }
 function climbTurn()
 {
    turnLeft();
    move();
    turnRight();
 }
 function step()
 {
    move();
    climbTurn();
 }
 function work()
 {
    
    step();
    putBeeper();
 }
       
 