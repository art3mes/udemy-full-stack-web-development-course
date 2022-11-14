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

 // alternate beeper insertion
function main(){
    putBeeper();
    MMB();
    MMB();
    ROdd();
    REven();
    ROdd();
    REven();
     
 }
 function MMB()
 {
    move();
    move();
    putBeeper();
 }
 function ROdd()
 {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    MMB();
    move();
 }
 function REven()
 {
    turnRight();
    move();
    turnRight();
    putBeeper();
    MMB();
    MMB();
 }