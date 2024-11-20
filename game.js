let x = 180;
let y = 200;
let gx=0;
let gy=0;
let cx=0;
let cy=0;

let velocityY = 0.1;
let acceleration = 0;
let gameState   = "true";
  function setup() {
    createCanvas(703, 750); // Smaller canvas for game
    background(255);
    angleMode(DEGREES);
} 
function parachut(){
 

// Parachute
noStroke();
fill(204, 0, 0);
arc(40 + x,  y, 200, 200, 180, 0);

fill(235, 220, 190);
ellipse( x-44, y, 30, 30);
ellipse( x-12,  y, 30, 30);
ellipse( x+20,  y, 30, 30);
ellipse( x+120, y, 30, 30);
ellipse( x+90,  y, 30, 30);
ellipse( x+56, y, 30, 30);

strokeWeight(2);
stroke(0);
line(130 + x, 10 + y, 72 + x, 59 + y); // Adjusted to align behind Mario's body
line( x-40,  y+6, 26 + x, 59 + y); 
}
function startscreen(){
    
    
    
    
    
        background(137, 207, 240);
        push();
        fill(184,115,51);
        noStroke(); 
        //rect(110,162,490,200,40);
        textSize(65);
        textStyle(BOLDITALIC);
        fill(245,222,179);
        textFont('Courier New',60);
        text("👾Super(dupe)Mario👾", 0, 140);
        textFont('Courier New',20);
        text("land safely in one of the green tubes", 120, 190);
        textFont('Courier New',20); 
        fill(0);
        text("-scape key= jump", 90, 260);
        text("-Left arrow key= move left", 90, 290);
        text("-right arrow key= move right", 90, 320);
        //text("MARIO!", 250, 330);
        
        pop();
        //startbutton 
        push();
        fill(30,20,70);
        ellipse(325, 490, 200, 90);
        textSize(35);
        fill(255);
        textStyle(ITALIC);
        textAlign(CENTER);
        textFont('Courier New', 50);
        text("START", 320, 500);
        pop();
        
 }
function mario(){
    // Body
    noStroke();
    fill(204, 0, 0);
    rect(x + 22, y + 59, 52, 25, 16, 17, 5, 1);

    // Belly
    push();
    fill(0, 101, 179);
    ellipse(x + 50, y + 90, 52, 40);
    pop();

    // Legs
    push();
    fill(0, 101, 179);
    translate(x + 30, y + 102);
    rotate(9);
    rect(0, 0, 15, 33);
    pop();
    push();
    fill(0, 101, 179);
    translate(x + 52, y + 104);
    rotate(-9);
    rect(0, 0, 15, 33);
    pop();

    // Arms
    push();
    translate(x + 24, y + 65);
    rotate(40);
    rect(0, 0, 11, 22, 0, 0, 5, 0);
    pop();
    push();
    translate(x + 18, y + 74);
    rotate(130);
    rect(0, 0, 11, 22, 0, 0, 0, 0);
    pop();

    push();
    translate(x + 72, y + 78);
    rotate(-135);
    rect(0, 0, 12, 44);
    pop();

    // Salopette
    fill(0, 101, 179);
    rect(x + 35, y + 59, 6, 15);
    rect(x + 55, y + 59, 6, 15);
    fill(255, 255, 0);
    circle(x + 38, y + 75, 5);
    circle(x + 57, y + 75, 5);

    // Face
    noStroke();
    fill(254, 209, 176);
    ellipse(x + 49, y + 38, 40, 50);
    ellipse(x + 34, y + 48, 15, 20);
    ellipse(x + 62, y + 48, 15, 20);

    // Hat
    noStroke();
    fill(204, 0, 0);
    arc(x + 49, y + 29, 45, 55, 180, 0);

    push();
    noFill();
    strokeWeight(6.25);
    stroke(149, 6, 6);
    curve(x - 25, y + 50, x + 26, y + 28.5, x + 72, y + 27.75, x + 200, y + 87.5);
    pop();

    push();
    fill(255, 255, 255);
    circle(x + 49, y + 11.5, 15);
    pop();

    // Ears
    fill(254, 209, 176);
    ellipse(x + 29, y + 35, 10, 13);
    ellipse(x + 68, y + 35, 10, 13);

    // Mustache
    fill(53, 33, 0);
    ellipse(x + 49, y + 49.5, 32.5, 10);
    ellipse(x + 35, y + 51, 6, 6);
    ellipse(x + 39, y + 52.5, 6, 6);
    ellipse(x + 43, y + 53, 6, 6);
    ellipse(x + 47, y + 53.75, 6, 6);
    ellipse(x + 57, y + 52.5, 6, 6);
    ellipse(x + 62, y + 51, 6, 6);
    ellipse(x + 52, y + 53.5, 6, 6);
    fill(254, 209, 176);
    ellipse(x + 49, y + 44, 32.5, 10);

    // Eyes
    fill(255);
    ellipse(x + 41, y + 39, 10, 12.5);
    ellipse(x + 57, y + 39, 10, 12.5);
    fill(0, 150, 255);
    ellipse(x + 54, y + 39, 6, 10);
    ellipse(x + 43, y + 39, 6, 10);
    fill(8, 24, 168);
    ellipse(x + 53.5, y + 39, 4, 6);
    ellipse(x + 44, y + 39, 4, 6);
    fill(255);
    ellipse(x + 53, y + 37.5, 1.5, 1.25);
    ellipse(x + 44, y + 37.5, 1.5, 1.25);

    // Nose
    fill(243, 200, 169);
    ellipse(x + 49, y + 47.5, 14.25, 11.5);

    // Shoes
    fill(150, 75, 0);
    ellipse(x + 29, y + 138, 22.5, 15);
    ellipse(x + 68, y + 138, 22.5, 15);

    // Hands
    push();
    translate(x - 10, y + 49);
    rotate(40);
    fill(220, 220, 220);
    rect(0, 0, 15, 15, 5);
    pop();

    push();
    translate(x + 103, y + 27);
    rotate(45);
    fill(220, 220, 220);
    rect(0, 0, 15, 15, 5);
    pop();  
}
function greenbox(){
    stroke(0);
    strokeWeight(3);
    fill(110,75,0);
rect(0, gy+690, 700,100);
fill(34,139,34);
rect(gx+400,gy+540,110,150);
rect(gx+78,gy+600,90,90);
rect(gx+56.5,gy+560,130,40);
rect(gx+373,gy+503,160,40);

} 
function cloud(){
    fill(255);
    noStroke();
    //cloud1
rect(cx+20, cy+190, 150, 70,40,40);
ellipse(cx+136,cy+220,70,70);
ellipse(cx+100,cy+200,70,70);
ellipse(cx+49,cy+220,70,70);
//cloud2
rect(cx+340, cy+190, 150, 70,40,40);
ellipse(cx+458,cy+220,70,70);
ellipse(cx+420,cy+200,70,70);
ellipse(cx+370,cy+220,70,70);
}
function winscreen(){
    background(137, 207, 240);
    push();
    fill(50,205,51);
    noStroke(); 
    rect(112,162,490,200,40);
    textSize(65);
    textFont('Courier New');
    textStyle(BOLDITALIC);
    fill(245,222,179);
    textFont('Courier New', 50);
    text("😎Well Played😎", 150, 270);
    //text("MARIO!", 250, 330);

    pop();
    fill(255); 
    ellipse(325, 500, 200, 60);
    fill(0);
    textSize(20);
    noStroke();
    text("Play Again!", 270, 510);
}  
function losescreen(){
    background(137, 207, 240);
    push();
    fill(255,0,0);
    noStroke(); 
    rect(110,162,490,200,40);
    textSize(65);
    textStyle(BOLD);
    fill(245,222,179);
    
    text("GAMEOVER  ", 150, 270);
    text("🤕", 342, 336);
    //text("MARIO!", 250, 330);
    pop();
    fill(255); 
    ellipse(370, 500, 200, 60);
    fill(0);
    noStroke();
    textSize(20);
    text("Try again!", 317, 510);
}  
  


function draw() {
  clear();
    if (gameState === "true") {
        startscreen(); 
      } else if (gameState === "play") {

        background(235, 220, 190);
        if(keyIsDown(32 )){
            parachut();
        }mario(x,y);
        cloud(cx,cy);
        
        greenbox(gx, gy); 
        
        
    } else if (gameState === "Lost") {
        losescreen();
      } else if (gameState === "over") {  
        winscreen();  
        } 
        if (gameState === "true") {
            if (mouseIsPressed) { 
              if (mouseX > 190 && mouseX < 390 && mouseY < 520 && mouseY > 460) {
                gameState = "play"; 
            } 
            }
        } 
        if (gameState === "over") {
            if (mouseIsPressed) {
              if (mouseX > 190 && mouseX < 390 && mouseY < 520 && mouseY > 460) {
                gameState = "play";
            }
            }
        } 
        if  (gameState === "Lost") {
            if (mouseIsPressed) {
              if (mouseX > 255 && mouseX < 422 || mouseY < 520 && mouseY > 460) {
                //console.log("Changing state to play");
                gameState = "play";
 
            } 
            }
        }   
    if (gameState=== "play"){
    y = y + velocityY; 
    velocityY = velocityY + acceleration;
    acceleration += 0.005;
    //cloud moving
    cx=cx-4;
    if(cx<-500){
        cx=width;
    }
    if (keyIsDown(32 )) {
        velocityY -= 2 ; 
    
    }  
 
   if(keyIsDown(37)){ 
    x=x-2.5;    
   } 
   if(keyIsDown(39)){
    x=x+2.5;
   } 
   if (y >= 560) {
    if ((x >= 55 && x <= 177) || (x >= 374 && x <= 530)) {
        if(velocityY<15){
        velocityY = 0.1;
        acceleration = 0;
        x = 180;
         y = 0; 
        gameState = "over";
    }else if(velocityY>15){
        velocityY = 0.1;
        acceleration = 0;
        x = 180;
         y = 0;
        gameState = "Lost";
    }

       
    } else if (x > 177 && x < 374 ) {
        velocityY = 0.1;
        acceleration = 0;
        x = 180;
         y = 0;
        gameState = "Lost";
    } 
    if (x< 55 || x>530){ 
        velocityY = 0.1;
        acceleration = 0;
        x = 180;
         y = 0;
        gameState = "Lost"; 
    } 
}
}
}    


