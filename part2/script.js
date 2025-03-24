import Backpack from "./Backpack.js";

const myBackpack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    10,
    20,
    20,
    false,
    "December 25, 2024 15:00:00 UTC+05:30"
)
const content = `
<main>
    <article>
        <h1>${myBackpack.name}</h1>
        <ul>
            <li>Volume: ${myBackpack.volume}</li>
            <li>Color: ${myBackpack.color}</li>
            <li>Age: ${myBackpack.howOld()}</li>
            <li>Number of pockets: ${myBackpack.numOfPocket}</li>
            <li>Left strap length: ${myBackpack.strapLength.left}</li>
            <li>Right strap length: ${myBackpack.strapLength.right}</li>
            <li>Lid status: ${myBackpack.lidOpen}</li>
        </ul>
    </article>
</main>
`
// const myVar = 3;
// const myVar2 = 5;
// // const myString = 'myVar = ' + myVar + 'myVar2 = ' + myVar2;
// const myString = `myVar = ${myVar} myVar2 = ${myVar2}`;
// console.log(myString);

// document.body.innerHTML = content;
