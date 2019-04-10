class Particle {
  constructor(x, y, mass) {
    this.mass = mass;
    this.pos = new Vector(x, y);
    this.lastPos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
  }

  applyForce(force) {
    const adjustedForce = force.div(this.mass);
    this.acc = this.acc.add(adjustedForce);
  }

  random() {
    this.pos.x = Math.random() * width;
    this.pos.y = Math.random() * height;
  }

  update() {
    this.vel = this.vel.add(this.acc);
    this.lastPos = this.pos;
    this.pos = this.pos.add(this.vel);
    this.acc = this.acc.mult(0);

<<<<<<< HEAD
    if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > width || this.pos.y > height) {
      this.random();
    }
=======
    // if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
    //   this.random();
    // }
>>>>>>> d16e4f2a4dc600214ada1e1a7908533618aa09d6
  }

  draw() {
    line(this.lastPos, this.pos);
  }

  random() {
    this.pos.x = Math.random() * width;
    this.pos.y = Math.random() * height;
  }
}