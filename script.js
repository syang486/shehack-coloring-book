var squares = Array(30).fill(false).map(() => new Array(30).fill(false));

var c;

var black;

var pizzaY;

var pizzaR;

var pizzaB;

function setup() {
    initializeFields();
    // frameRate(5);
    initializeFields();
    // size of the screen
    createCanvas(1000, 720);
    // background colour
    background(255);
}

function draw() {
    // creates the grid
    var i;
    stroke(250);
    for (i = 40; i < 1040; i = i + 40) {
        // sets up the grid
        // 1000 correlates to the size of the screen
        line(i, 0, i, 1000);
        line(0, i, 1000, i);
    }
    textSize(12);
    fill(137, 207, 240);
    text("Colour Legend: ", 900, 645);
    fill(black);
    text("1 Black", 900, 660);
    fill(pizzaY);
    text("2 Yellow", 900, 675);
    fill(pizzaR);
    text("3 Red", 900, 690);
    fill(pizzaB);
    text("4 Brown", 900, 705);
    // numbers - black
    fill(0);
    for (i = 480; i < 640; i = i + 40) {
        text("1", i, 80);
    }
    for (i = 400; i < 480; i = i + 40) {
        text("1", i, 120);
    }
    text("1", 600, 120);
    text("1", 360, 160);
    for (i = 520; i < 640; i = i + 40) {
        text("1", i, 160);
    }
    text("1", 320, 200);
    text("1", 440, 200);
    text("1", 480, 200);
    text("1", 640, 200);
    text("1", 280, 240);
    text("1", 400, 240);
    for (i = 560; i < 680; i = i + 40) {
        text("1", i, 240);
    }
    text("1", 240, 280);
    text("1", 360, 280);
    text("1", 520, 280);
    text("1", 640, 280);
    text("1", 200, 320);
    text("1", 320, 320);
    text("1", 520, 320);
    text("1", 640, 320);
    text("1", 200, 360);
    text("1", 280, 360);
    text("1", 360, 360);
    text("1", 400, 360);
    text("1", 560, 360);
    text("1", 600, 360);
    text("1", 680, 360);
    text("1", 160, 400);
    text("1", 280, 400);
    text("1", 320, 400);
    text("1", 440, 400);
    text("1", 680, 400);
    text("1", 160, 440);
    text("1", 240, 440);
    text("1", 320, 440);
    text("1", 440, 440);
    text("1", 680, 440);
    text("1", 160, 480);
    text("1", 240, 480);
    text("1", 360, 480);
    text("1", 400, 480);
    text("1", 680, 480);
    for (i = 160; i < 280; i = i + 40) {
        text("1", i, 520);
    }
    text("1", 560, 520);
    text("1", 600, 520);
    text("1", 720, 520);
    for (i = 280; i < 480; i = i + 40) {
        text("1", i, 560);
    }
    text("1", 520, 560);
    text("1", 640, 560);
    text("1", 720, 560);
    for (i = 440; i < 600; i = i + 40) {
        text("1", i, 600);
    }
    text("1", 640, 600);
    text("1", 720, 600);
    for (i = 600; i < 760; i = i + 40) {
        text("1", i, 640);
    }
    fill(pizzaB);
    for (i = 480; i < 600; i = i + 40) {
        text("4", i, 120);
    }
    for (i = 400; i < 520; i = i + 40) {
        text("4", i, 160);
    }
    for (i = 360; i < 440; i += 40) {
        text("4", i, 200);
    }
    for (i = 320; i < 380; i = i + 40) {
        text("4", i, 240);
    }
    for (i = 280; i < 360; i = i + 40) {
        text("4", i, 280);
    }
    for (i = 200; i < 240; i = i + 40) {
        text("4", i, 480);
    }
    for (i = 200; i < 240; i = i + 40) {
        text("4", i, 440);
    }
    for (i = 200; i < 280; i = i + 40) {
        text("4", i, 400);
    }
    for (i = 240; i < 280; i = i + 40) {
        text("4", i, 360);
    }
    for (i = 240; i < 320; i = i + 40) {
        text("4", i, 320);
    }
    // numbers - red
    fill(pizzaR);
    for (i = 560; i < 640; i = i + 40) {
        text("3", i, 280);
        text("3", i, 320);
    }
    for (i = 360; i < 440; i = i + 40) {
        text("3", i, 400);
        text("3", i, 440);
    }
    for (i = 560; i < 640; i = i + 40) {
        text("3", i, 560);
    }
    text("3", 600, 600);
    // numbers - yellow
    fill(pizzaY);
    for (i = 520; i < 640; i = i + 40) {
        text("2", i, 200);
    }
    for (i = 440; i < 560; i = i + 40) {
        text("2", i, 240);
    }
    for (i = 400; i < 520; i = i + 40) {
        text("2", i, 280);
    }
    for (i = 360; i < 520; i = i + 40) {
        text("2", i, 320);
    }
    text("2", 320, 360);
    for (i = 440; i < 560; i = i + 40) {
        text("2", i, 360);
    }
    text("2", 640, 360);
    for (i = 480; i < 680; i = i + 40) {
        text("2", i, 400);
    }
    text("2", 280, 440);
    for (i = 480; i < 680; i = i + 40) {
        text("2", i, 440);
    }
    for (i = 280; i < 360; i = i + 40) {
        text("2", i, 480);
    }
    for (i = 440; i < 680; i = i + 40) {
        text("2", i, 480);
    }
    for (i = 280; i < 540; i = i + 40) {
        text("2", i, 520);
    }
    for (i = 640; i < 720; i = i + 40) {
        text("2", i, 520);
    }
    text("2", 680, 560);
    text("2", 480, 560);
    text("2", 680, 600);
    // title and instructions
    textSize(40);
    fill(255, 0, 0);
    text("C", 40, 40);
    fill(255, 127, 0);
    text("O", 60, 40);
    fill(255, 225, 0);
    text("L", 85, 40);
    fill(148, 0, 211);
    text("O", 100, 40);
    fill(0, 0, 255);
    text("R", 125, 40);
    fill(0, 0, 0);
    text("I", 145, 40);
    fill(0, 255, 211);
    text("N", 152, 40);
    fill(255, 0, 0);
    text("G", 175, 40);
    fill(255, 127, 0);
    text("B", 200, 40);
    fill(0, 255, 0);
    text("O", 220, 40);
    fill(0, 0, 255);
    text("O", 245, 40);
    fill(75, 0, 130);
    text("K", 270, 40);
    fill(148, 0, 211);
    fill(0);
    textSize(8);
    text("Click the square once to fill it in, and again to remove the colour.", 40,80);
    text("To change colour, use your keyboard with the numbers shown on the legend.",40,120);
}

function mouseClicked() {
    // bunch of math stuff that shifts the mouse over by the size of the boxes in the grid
    var remainderX = mouseX % 40;
    var remainderY = mouseY % 40;
    var xMouse = (mouseX - remainderX) / 40;
    var yMouse = (mouseY - remainderY) / 40;
    if (squares[xMouse][yMouse] == false) {
        // if the coordinates have been clicked
        fill(c);
        // draws a square overtop of the
        square(mouseX - remainderX, mouseY - remainderY, 40);
        // grid with specific colour
        // sets the boolean array to true
        squares[xMouse][yMouse] = true;
    } else // code to let them unfill a square
    if (squares[xMouse][yMouse] == true) {
        fill(255);
        square(mouseX - remainderX, mouseY - remainderY, 40);
        squares[xMouse][yMouse] = false;
    }
}

function keyPressed() {
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

function initializeFields() {
}

function initializeFields() {
    c = color(0);
    black = color(0);
    pizzaY = color(243, 219, 5);
    pizzaR = color(229, 14, 15);
    pizzaB = color(201, 67, 16);
}
