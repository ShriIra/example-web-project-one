console.log("Script is loaded");

var myVariable = 123;

function myFunction() {
    myVariable = "hi";
    console.log("inside myVariable: ", myVariable);
}

myFunction();

console.log("myVariable: ", myVariable);

let myLetVariable = 456;

function mySecondFunction() {
    let myLetVariable = "Another let";
    
    console.log("inside the function myLetVariable: ", 
    myLetVariable);
}

mySecondFunction()

console.log("myLetVariable: ", myLetVariable);



var x = 4, y = 5, z = 6;

var empty;
console.log("empty:", empty);

var w = null;


// var color = "purple";
let newColor = "purple";

function headingColor() {
    let newColor = "blue";
    document.querySelector(".title").style.color = newColor;
}

headingColor();

document.querySelector(".right").style.backgroundColor = newColor;


let stringDemo = "My String";
console.log("typeof stringDemo:", typeof stringDemo);

let intDemo = 3;
console.log("typeof intDemo:", typeof intDemo);

let floatDemo = 4.6;
console.log("typeof floatDemo:", typeof floatDemo);

// let undefinedDemo = undefined;
let undefinedDemo;
console.log("typeof undefinedDemo:", typeof undefinedDemo);

let nullDemo = null;
console.log("typeof nullDemo:", typeof nullDemo);

if (nullDemo) {
    console.log("nullDemo: True")
} else {
    console.log("nullDemo: False")
}


if (undefinedDemo) {
    console.log("undefinedDemo: True")
} else {
    console.log("undefinedDemo: True")
    console.log("undefinedDemo: False")
}

const myConstant = 5;

const myConstObj = { a: 'a', b: 'b'}

// myConstObj = {c: 'c', d: 'd'} // not allowed

myConstObj.a = 'c'

console.log("myConstObj:", myConstObj)

const myArray = ["tango", "fox", "tiger"];
console.log("myArray:", myArray);

myArray.push("cat");
console.log("myArray:", myArray);

console.log("typeof myArray: ", typeof myArray);


let a = true;
let b = false;
console.log("a is: ", typeof a);

let myVar1 = 5;
let myVar2 = "5";

console.log("myVar1 == myVar2 :", myVar1 == myVar2);
console.log("myVar1 === myVar2 :", myVar1 === myVar2);

a = "five"
b = "Five"

console.log(a == b)

a = 5
b = 4

console.log("a + b :", a + b);

b = "4";

console.log("a + b :", a + b);
console.log("typeof (a + b) :", typeof (a + b));

console.log("a - b", a - b);
console.log("typeof (a - b)", typeof (a - b));

console.log('a / b :', a / b );
console.log('a % b :', a % b );

console.log('a ** b :', a ** b );


let item = "flashlight";
const collection = ["Piggy doll", item, 5, true]

console.log("collection :", collection);
console.log("collection.length :", collection.length);

console.log("collection[1] : ", collection[1]);

collection[collection.length] = "new item";

console.log("collection :", collection);

collection[9] = "index 9 item";
console.log("collection :", collection);

console.log("collection[8]:", collection[8]);



let backpackContents = ["piggy", "headlamp", "pen"];
console.log(backpackContents);

backpackContents.push("pencil");

console.log(backpackContents);

backpackContents.pop()

console.log(backpackContents);

backpackContents.unshift("pencil", 5);

console.log(backpackContents);

backpackContents.shift()

console.log(backpackContents);


backpackContents.forEach(function (item) {
    console.log(item);
});


// for (let item of backpackContents) {
//     console.log(item);
// }

console.log("join: ", backpackContents.join())
console.log("join: ", backpackContents.join(", "))
console.log("join: ", backpackContents.join(" - "))


console.log("indeOf", backpackContents.indexOf("headlamp"));

// let indexOfpiggy = backpackContents.indexOf("piggy");
// backpackContents.splice(indexOfpiggy, 2)
// console.log(backpackContents)


function myFunction3(item) {
    return "<li>" + item + "</li>";
}

const myFunction4 = function (item) {
    return "<li>" + item + "</li>";
}

const myFunction5 = (item) => {
    return "<li>" + item + "</li>"; 
}

// const myFunction6 = (item) => ("<li>" + item + "</li>");
const myFunction7 = item => "<li>" + item + "</li>";

// let newArray = backpackContents.map(myFunction3);
// let newArray = backpackContents.map(myFunction4);
// let newArray = backpackContents.map(myFunction5);
// let newArray = backpackContents.map(myFunction6);
// let newArray = backpackContents.map(myFunction7);
let newArray = backpackContents.map(item => "<li>" + item + "</li>");

console.log("newArray:", newArray);
