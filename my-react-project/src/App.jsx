import './App.css'
import { useState, useReducer, useEffect } from "react";
import myImage from "./images/myimage.jpeg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Toy Store</h1>
      <p>Copyright {year}</p>
    </header>
  )
}


function Main({ listitems, storeStatus, onStatus }) {
  return (
    <>
      <h2>The store is currently {storeStatus ? "Open" : "Closed"}</h2>
      <button onClick={() => onStatus(false)}>Close</button>
      <img src={myImage} height={300} width={300} />
      <img src="https://github.com/ShriIra.png" width={200} height={200} />
      <ul>
        {listitems.map((item) => 
          <li key={item.id} style={{ listStyleType: "none" }}>
            {item.title}
          </li>)}
      </ul>
    </>
  )
}


const items = [
  "Apple",
  "Ball",
  "Cat",
  "Dog",
  "Elephant"
]

const itemObjects = items.map((item, i) => { return { id: i, title: item } });

// const animals = ["giraffe", "zebra", "bear"];

// const [firstAnimal, ,thidAnimal] = animals;
// console.log(firstAnimal);
// console.log(thidAnimal);

function App() {
  const [status, setStatus] = useState(true);

  // const [status, toggle] = useReducer((status) => !status, true)
  
  useEffect(() => {
    console.log(`The toy store is ${status ? "open": "closed"}`)
  }, [status]);

  return (
    <div>
      
      <h1>The store is currently {status ? "Open" : "Closed"}</h1>
      <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Store</button>
      {/* <button onClick={toggle}>{status ? "Close" : "Open"} Store</button> */}

      {/* <Header name="Alex" year={new Date().getFullYear()} />
      <Main listitems={itemObjects} storeStatus={status} onStatus={setStatus} /> */}
    </div>
  )
}

export default App
