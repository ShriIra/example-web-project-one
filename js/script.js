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


function doSomething(a, b) {
    return a + b;
};

console.log("doSomething:", doSomething(1, 2));

const doSomeOtherThing = function (a, b) {
    return a + b;
}

console.log("doSomeOtherThing: ", doSomeOtherThing(1, 3));

const myArrowFunction = (a, b, c) => {
    a = a + c;
    b = b * c;
    return a + b + c;
};

console.log("myArrowFunction:", myArrowFunction(2,3,4));


const myOptimizedArrowFunction = (a, b, c) => (a + b + c);
    
console.log("immediatelyInvokedFunction:", ((a, b, c) => {
    a = a + c;
    b = b * c;
    return a + b + c;
})(1, 5, 7));


const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    numOfPockets: 3,
    newVolume: function (volume) {
        this.volume = volume;
        // (function () {
        //     console.log("this.volume in the nested function", 
        //         this.volume);
        // })()
        (() => {
            console.log("this.volume in the nested function", 
                        this.volume);
        })();
    }
}
greenPack.newVolume(40)
console.log("greenPack.volume:", greenPack.volume);

function myMainFunction(a, b, c, anyCallbackFunction) {
    a = a + b + c;
    b = b + c + a;
    c = c + a + b;

    anyCallbackFunction(a + b + c);
}

function myGenericFunction(result) {
    console.log("result: ", result);
};

myMainFunction(2, 3, 4, myGenericFunction);

myMainFunction(3, 4, 6, (r) => {
    console.log("r:", r);
});


myMainFunction(3, 4, 6, function (r) {
    console.log("anonymous r:", r);
});


// Conditional Statements if, else, switch

// if (condition) {
//     // if block
// } else {
//     // else block
// }



// >, >=, <, <=, ==, ===, !=, !==
a = 5;
b = 10;

c = "5"

console.log("a == c", a == c); // true
console.log("a != c", a != c); // false

console.log("a === c", a === c); // false
console.log("a !== c", a !== c); // true

if (a > 5) {
    console.log("a is greater than 5");
} else if (b >= a) {
    console.log("b is greater than or equal to b");
} else {
    console.log("no conditions have been satisfied.");
}

age = 70;

switch (true) {
    case age < 30:
        console.log("age < 30");
        break;
    case age < 50:
        console.log("age >=30 and < 50");
        break;
    case age < 60:
    case age < 55:
        console.log("age > 50");
        console.log("age < 60");
        console.log("age < 55");
        break;
    default:
        console.log("did not match any case");
}


a = 10
console.log("a:", a);
a = a + 1;
a++
console.log("a", a);
b = a++
console.log("b:", b)
console.log("a:", a);

c = ++a
console.log("c:", c);
console.log("a:", a);
// console.log("a:", a++);

a--
console.log("a:", a);
d = a--
console.log("d:", d);
console.log("a:", a);

d = --a
console.log("d:", d);
console.log("a:", a);


for (let i=0; i < 10; i++) {
    console.log("i:", i);
}

let stuff = ["a", "b", "c", "d", "e"]
console.log("stuff.length", stuff.length);
console.log("stuff[3]:", stuff[3])

for (let i=0; i < stuff.length; i++) {
    console.log(stuff[i]);
}

for (const item of stuff) {
    console.log("item:", item);
}

stuff.forEach((item) => {
    console.log("forEach item:", item);
})

let myNewArray = [];

let forEachReturn = stuff.forEach((item) => {
    myNewArray.push("<li>"+item+"</li>");
})

console.log("forEachReturn:", forEachReturn);

console.log("myNewArray:", myNewArray);


const myNestedObject = {
    item01: {
        name: "Piggy",
        type: "toy",
        weigth: 30
    },
    item02: {
        name: "headlamp",
        type: "equipment",
        weight: 120
    }
}

for (const myObject in myNestedObject) {
    console.log(myObject);
    console.log(myNestedObject[myObject]);
}



let myMappedArray = stuff.map((item) => {
    console.log("mapItem:", item);
    return "<li>"+item+"</li>";
})

console.log("myMappedArray:", myMappedArray);

