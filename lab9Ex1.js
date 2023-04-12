let eyeList = [];

function setup() {
  createCanvas(400, 400);

  newEye1 = new BouncingEye(0, 0, 2, 1, 1);
  newEye2 = new BouncingEye(60, 0, 1, 2, 1);

  for (let i = 0; i < 10; i++) {
    let bouncingEye = new BouncingEye(random(10), 100, 2.5, 50);
  }

  eyeList = [newEye1, newEye2];
}

function draw() {
  background(220);

  eyeList[0].draw();
  eyeList[0].move();

  eyeList[1].draw();
  eyeList[1].move();

  //   newEye1.draw();
  //   newEye1.move();
  //   newEye2.draw();
  //   newEye2.move();
}

class BouncingEye {
  constructor(x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }
  draw() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    fill("white");
    ellipse(25, 25, 50);
    fill("deepskyblue");
    ellipse(25, 25, 20);
    fill("black");
    ellipse(25, 25, 10);
    pop();
  }
  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if (this.x > 350 || this.x < 0) {
      this.speedX = this.speedX * -1;
      if (this.y > 250 || this.y < 100) {
        this.speedY = this.speedY * -1;
      }
    }
  }
}
