class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  getVolume() {
    return ((4 / 3) * (Math.PI * this.radius ** 3)).toFixed(4);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return ((1 / 3) * (Math.PI * this.radius ** 2 * this.height)).toFixed(4);
  }
}

let cylinder1 = new Cylinder(2, 4);
console.log(
  `Volume of a cylinder with radius ${cylinder1.radius} and height ${
    cylinder1.height
  } is ${cylinder1.getVolume()}`
);

let sphere1 = new Sphere(2);
console.log(
  `Volume of a sphere with radius ${sphere1.radius} and height ${
    sphere1.height
  } is ${sphere1.getVolume()}`
);

let cone1 = new Cone(2, 4);
console.log(
  `Volume of a cylinder with radius ${cone1.radius} and height ${
    cone1.height
  } is ${cone1.getVolume()}`
);
