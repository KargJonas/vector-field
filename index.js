const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

const width = cnv.width;
const height = cnv.height;
const halfWidth = width / 2;
const halfHeight = height / 2;

const center = new Vector(halfWidth, halfHeight);

const TILE_SIZE = 10;

const beginPath = () => ctx.beginPath();
const stroke = () => ctx.stroke();
const clear = () => ctx.clearRect(0, 0, width, height);

function line(pos1, pos2) {
  ctx.moveTo(pos1.x, pos1.y);
  ctx.lineTo(pos2.x, pos2.y);
}

function z(position) {
  return center
    .sub(position)
    .mult(
      Math.sqrt(Math.pow(position.x, 2) + position.y) / 1000)
}

// !!!!!!! //
const particles = [];

for (let i = 0; i < 100; i++) {
  particles[i] = new Particle(
    Math.random() * width,
    Math.random() * height,
    1
  );
}

function draw() {
  requestAnimationFrame(draw);
  // clear();
  beginPath();

  // particles.map((particle) => {
  //   const returnedValue = z(particle.pos);
  //   const limited = returnedValue.adjust(1);

  //   particle.applyForce(limited);
  //   particle.update();
  //   particle.draw();
  // });

  stroke();
}

draw();