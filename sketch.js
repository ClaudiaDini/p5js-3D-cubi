let cubi = [];
let copie = 30;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-1000, 1000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      size: 100,
      color: random(["pink", "blue", "red"]),
      //rotationAxis : random (["x", "y", "z"]),
      rotationFunction: random([rotateX, rotateY, rotateZ]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background(0);
  orbitControl();

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    cubo.rotationFunction(frameCount / 10);
    //if (cubo.rotationAxis == "x") {
    //rotateX(frameCount / 10);
    //} else if (cubo.rotationAxis == "y") {
    //  rotateY(frameCount / 20);
    //} else (cubo.rotationAxis == "z") {
    //  rotateZ(frameCount * 10);
    //}

    fill(cubo.color);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
