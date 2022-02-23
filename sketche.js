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

    let targetX = mouseX;
    let dx = targetX - x1;
    x1 += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y1;
    y1 += dy * easing;

    fill(0);
    ellipse(x1, y1, w1, w1);

}