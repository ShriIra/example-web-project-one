class Backpack {
  constructor(
    name,
    volume,
    color,
    numOfPocket,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.numOfPocket = numOfPocket;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
}

export default Backpack;
