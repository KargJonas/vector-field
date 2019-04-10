class Complex {
  constructor(r, i) {
    this.r = r; // Real component
    this.i = i; // Imaginary component
  }

  mult(other) {
    return new Complex(
      this.r * other.r - this.i * other.i,
      this.r * other.i + other.r * this.i
    );
  }

  distance(other) {
    return Math.sqrt(
      Math.pow(this.r - other.r, 2) +
      Math.pow(this.i - other.i, 2)
    );
  }

  add(other) {
    return new Complex(
      this.r + other.r,
      this.i + other.i
    );
  }
}

function z(values, c, depth = 0) {
  depth--;
  if (depth <= 0) return values;

  const previous = values[values.length - 1];
  const newValue = previous.mult(previous).add(c);

  values.push(newValue);
  return z(values, c, depth);
}

function getGrowthSpeed(c) {
  const firstFew = z([new Complex(0, 0)], c, 10);

  // The distances between the first and all of
  // the other points
  const distances = [];

  // Compare first value to all others
  for (let n = 1; n < firstFew.length; n++) {
    distances.push(firstFew[0].distance(firstFew[n]));
  }

  const deltas = [];

  for (let n = 1; n < distances.length; n++) {
    deltas.push(distances[n] - distances[n - 1]);
  }

  const average = deltas.reduce((a, b) => (a + b)) / deltas.length;
  return Math.abs(average);
}