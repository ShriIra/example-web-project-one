import Box from "./Box.js";
import Backpack from "./Backpack.js";
import HikingBackpack from "./HikingBackpack.js";

// function Backpack(
//   name,
//   volume,
//   color,
//   numOfPocket,
//   strapLengthL,
//   strapLengthR,
//   lidOpen
// ) {
//     this.name = name;
//     this.volume = volume;
//     this.color = color;
//     this.numOfPocket = numOfPocket;
//     this.strapLength = {
//         left: strapLengthL,
//         right: strapLengthR,
//     }
//     this.lidOpen = lidOpen;
//     this.toggleLid = function (lidStatus) {
//         this.lidOpen = lidStatus;
//     }
// }

const mybox = {
  name: "My Box",
  color: "grey",
  strapLength: {
    left: 10,
    right: 10,
  },
  holes: [
    { wallnumber: 2, radius: 3 },
    { wallnumber: 4, radius: 2 },
  ],
  drillHole: function (wallnumber, radius) {
    this.holes.push({ wallnumber: wallnumber, radius: radius });
  },
  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  },
  volume: 30,
};

console.log("This is mybox:", mybox);
console.log({ mybox });
console.log("Strap L length:", mybox.strapLength.left);

let propertyName = "volume";
// console.log("volume = ", mybox["volume"]);
console.log(`${propertyName} = `, mybox[propertyName]);

const newBox = new Box("My New Box", "black", 10, 10, 40);
const newBox2 = new Box("My New Box 2", "blue", 20, 20, 60);

console.log({ newBox });
console.log({ newBox2 });

const mybackpack = new Backpack("My Backpack", 30, "grey", 10, 20, 20, false);
console.log({ mybackpack });

const myHikingBackpack = new HikingBackpack(
  "My Hiking Backpack",
  30,
  "grey",
  10,
  20,
  20,
  false,
  10
);
console.log({ ...myHikingBackpack });
console.log("lidOpen:", myHikingBackpack.lidOpen);

myHikingBackpack.toggleLid(true);
console.log("lidOpen:", myHikingBackpack.lidOpen);

console.log("After calling lidOpen method: ", { ...myHikingBackpack });