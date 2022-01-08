//array that correlates to the grid - [x][y]
boolean [][] squares = new boolean [30][30];
color c = 0;

//current colour for clicked squares (we can change it to the other colours later)
color black = color (0);
color pizzaY = color (243,219,5);
color pizzaR = color (229,14,15);
color pizzaB = color (201,67,16);
//color unfilled = color ();

void setup() {
//size of the screen
  size (1000,720);
//background colour
  background (255);
//frameRate(5);
}


void draw() { 
  textSize(40);
  text("C", 40, 40);
  fill(0);
  text("O", 60, 40);
  fill(200);
  text("L", 85, 40);
  fill(200);
  text("O", 100, 40);
  fill(200);
  text("R", 125, 40);
  fill(200);
  text("I", 145, 40);
  fill(200);
  text("N", 150, 40);
  fill(200);
  text("G", 175, 40);
  fill(200);
  text("B", 200, 40);
  fill(200);
  text("O", 220, 40);
  fill(200);
  text("O", 245, 40);
  fill(200);
  text("K", 270, 40);
  fill(200);
  //creates the grid
    int i;
    stroke (250);
    for (i = 40; i<1040; i= i+40) { //sets up the grid
      line (i, 0, i, 1000); //1000 correlates to the size of the screen
      line (0, i, 1000, i);
    }
    textSize(12);
    fill (137, 207, 240);
    text ("Colour Legend: ",900,645);
    fill(black);
    text ("1 Black", 900, 660);
    fill(pizzaY);
    text ("2 Yellow",900, 675);
    fill(pizzaR);
    text ("3 Red", 900, 690);
    fill(pizzaB);
    text ("4 Brown",900, 705);
    
    //numbers
fill (0);
for(i=480; i<600; i = i + 40) {
text ("1", i, 40);
  }
for (i=400; i<480; i=i+40) {
  text ("1", i, 80);
}
text("1", 600, 80);
text("1", 360, 120);
for (i=520; i<600; i=i+40) {
  text("1", i, 120);
}
text("1", 320, 160);
text("1", 440, 160);
text("1", 480, 160); 
text("1", 640, 160);
text("1", 280, 200);
text("1", 400, 200);
for (i=560; i<640; i= i+40) {
  text("1", i, 200);
}
text("1", 240, 240); 
text("1", 360, 240);
text("1", 520, 240);
text("1", 640, 240);
text("1", 200, 280);
text("1", 320, 280);
text("1", 520, 280);
text("1", 640, 280);

}
}

void mouseClicked() {

//bunch of math stuff that shifts the mouse over by the size of the boxes in the grid
int remainderX = mouseX%40; 
int remainderY = mouseY%40;
int xMouse = (mouseX - remainderX)/40;
int yMouse = (mouseY - remainderY)/40;

if (squares[xMouse][yMouse] == false) { //if the coordinates have been clicked
  fill (c);
  square(mouseX - remainderX, mouseY - remainderY, 40); //draws a square overtop of the
  // grid with specific colour
  squares[xMouse][yMouse] = true; //sets the boolean array to true
} 
//code to let them unfill a square
else if (squares[xMouse][yMouse] == true) {
  fill (255);
  square(mouseX - remainderX, mouseY - remainderY, 40);
  squares[xMouse][yMouse] = false;
}
    }
void keyPressed(){
 if (key == '1') {
  c = black;
 } else if (key == '2') {
  c = pizzaY; 
 } else if (key == '3') {
  c = pizzaR; 
 } else if (key == '4') {
  c = pizzaB; 
 }
}
