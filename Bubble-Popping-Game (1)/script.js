

let bubs = []; 
let score = 0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(10, 100);
    let col = color(random(255), random(255), random(255));

    let b = new Bubble(x, y, sz, col); 
    bubs.push(b); 
  }

}
/*function preLoad(){
  popped = loadSound("popped.mp3")

}*/
function draw() {
  //popped.play();
//background(backgroundColor);
 //background(220, 0, 80);
  background(200);
  
  textSize(25);
  noStroke();
  fill(0);
  text(score, 20,390);

  
  for (let bub of bubs) {
    bub.display();
    bub.update();
    bub.burst();
  }
  fill(0);
  text("Hover over the bubbles for sound", 10, 20);

}
/*function check_collision(bubbles){
  //console.log("sound");
  if (collideCircleCircle(mouseX, mouseY, 10, bubbles.x, bubbles.y, bubbles.r)){
    console.log("sound")
    popped.play();
  }
}*/
class Bubble {
  constructor(tempX = 200, tempY = 200, tempSize = 50, tempColor = 0) {
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    this.color = tempColor;
    this.alive = true;
  }

  display() {
    if (this.alive) {
      noFill();
      strokeWeight(1);
      stroke(this.color);
      ellipse(this.x, this.y, this.size);
    }
  }

  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  burst() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
    
      this.alive = false;
      this.x = 1000000;
      this.y = 1000000;
      score++;
    }

  }

}
/*function canvasPressed() {
  console.log("in preload")
  popped.play();
  console.log("leaving preload");
} */
