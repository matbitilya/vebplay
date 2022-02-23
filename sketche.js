let x = 0;
let y = 0;
let w = 40;

let x1 = 1;
let y1 = 1;
let w1 = 65;

let easing = 0.05;

let a = 0;



function setup() {
    createCanvas(1500, 700);
    x = width/2;
}

function draw() {
    background(150, 30, 220);
    
    fill(255);
    push();
    translate(x,y);
    rotate(a);
    rect(-20, -20, w, w);
    pop()

    a = a + 0.1;
    y = y + 5;

    if (y > height){
        y = -50;
        x = random(width);
    }

    let targetX = mouseX;
    let dx = targetX - x1;
    x1 += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y1;
    y1 += dy * easing;

    fill(0);
    ellipse(x1, y1, w1, w1);
    if (x+w>x1 && x<(x1+w1) && y+w>y1 &&        y<(y1+w1)) { 
          y=random(100)*-1;
          x=random(width);
        }

}