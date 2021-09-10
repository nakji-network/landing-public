var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let arcs = [];
let numPoints = 7;
let numLines = 250;
let colors = ["#dcb358", "#ba5c47", "#dcb358", "#dcb358", "#dcb358", "#dcb358"];
function setup() {
  createCanvas(windowWidth, windowHeight/2);

  for (let i = 0; i < numLines; i++) {
    let rot = map(i, 0, numLines, 0, TAU);
    arcs.push(new Arc(rot));
  }
}

let t = 0;
function draw() {
  background(0);
  noFill();
  // stroke(color(colors[2]));
  // strokeWeight(3);
  translate(width - width / 5, height - height / 5);

  t += radians(1);

  for (let i = 0; i < arcs.length; i++) {
    arcs[i].display(t);
  }
}

// let x, y, r, weight, col, rot;
class Arc {
  constructor(rotate) {
    this.x = 0;
    this.y = 0;
    this.rad = random(50, 250);
    this.rot = rotate;
    this.w = random(0.5, 3);
    this.col = color(colors[int(random(colors.length))]);
  }

  display(t) {
    strokeWeight(this.w);
    beginShape();
    let count = 0;
    let xoff = map(cos(t), -1, 1, 0, 2);
    let yoff = map(sin(t), -1, 1, 0, 2);
    let n = noise(xoff, yoff);
    let off = map(n, 0, 1, 0, 2);
    rotate(this.rot);
    for (let a = 0; a <= PI; a += PI / numPoints) {
      this.x = this.rad * cos(a - radians(10)) - this.rad;
      if (this.x < 0) {
        this.y = (this.rad / 4) * sin(a - t);
      } else {
        this.y = this.rad * sin(a);
      }

      let scale = map(mag(this.x, this.y), 0, this.rad, 0, 1);

      if (count == numPoints - 1) {
        noStroke();
        // noStroke();
        fill(color(colors[0]));
        circle(this.x, this.y * scale, 10);
        //circle(x, y*scale, 12);
        // arc(this.x, this.y*scale, 12, 12, PI/3, (PI/3)+PI);
        fill(color(colors[1]));
        arc(this.x, this.y * scale, 10, 10, PI + PI / 3, PI + PI / 3 + PI);
        // circle(this.x, this.y*scale, 12);
      }

      stroke(this.col);
      noFill();
      curveVertex(this.x, this.y * scale);
      count++;
    }
    endShape();
  }
}