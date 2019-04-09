const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

const width = cnv.width;
const height = cnv.height;
const halfWidth = width / 2;
const halfHeight = height / 2;

const TWO_PI = Math.PI * 2;
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
  const x = position.x / width;
  const y = position.y / height;

  return new Vector(
    Math.sin(x * 20),
    Math.sin(y * 20)
  );
}

// !!!!!!! //
const particles = [];

for (let i = 0; i < 1000; i++) {
  particles[i] = new Particle(
    Math.random() * width,
    Math.random() * height,
    1
  );
}

function draw() {
  requestAnimationFrame(draw);
  // clear();
  // drawFiled();
  drawPaths();
}

function drawPaths() {
  beginPath();

  ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";

  particles.map((particle) => {
    const returnedValue = z(particle.pos);
    const limited = returnedValue.adjust(1);

    particle.applyForce(limited);
    particle.update();
    particle.draw();
  });

  stroke();
}

function drawFiled() {
  beginPath();
  ctx.strokeStyle = "gray";

  for (let y = 0; y < width; y += TILE_SIZE) {
    for (let x = 0; x < width; x += TILE_SIZE) {
      const position = new Vector(x, y);
      const returnedValue = z(position);
      const limited = returnedValue.adjust(TILE_SIZE);
      const endpoint = position.add(limited);

      line(position, endpoint);
    }
  }

  stroke();
}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);
draw();