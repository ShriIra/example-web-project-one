class Backpack {
  constructor(
    name,
    volume,
    color,
    numOfPocket,
    strapLengthL,
    strapLengthR,
    lidOpen,
    boughtOn
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
    this.boughtOn = boughtOn;
  }

  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  howOld() {
    let now = new Date();
    let boughton = new Date(this.boughtOn);
    console.log({boughton});
    let elapsed = now - boughton;
    let daysElapsed = Math.floor(elapsed / (1000 * 60 * 60 * 24))
    return daysElapsed
  }
}

export default Backpack;
