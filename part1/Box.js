class Box {
  constructor(name, color, strapLengthLeft, strapLengthRight, volume) {
    this.name = name;
    this.color = color;
    this.strapLength = {
      left: strapLengthLeft,
      right: strapLengthRight,
    };
    this.volume = volume;
    this.holes = [];
  }

  drillHole(wallnumber, radius) {
    this.holes.push({ wallnumber, radius });
  }

  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  }
}

export default Box;
