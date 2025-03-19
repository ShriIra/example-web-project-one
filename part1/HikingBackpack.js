import Backpack from "./Backpack.js";

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    numOfPocket,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    super(
      name,
      volume,
      color,
      numOfPocket,
      strapLengthL,
      strapLengthR,
      lidOpen
    );
    this.hydrationCapacity = hydrationCapacity;
  }
}

export default HikingBackpack;