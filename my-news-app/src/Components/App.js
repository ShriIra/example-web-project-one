import { Component, useReducer } from "react";
import News from "./News";
import "./App.css";

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "everything":
        return {category: "everything", query: "domains=wsj.com"};
      case "tesla":
        return {category: "everything", query: "q=tesla&sortBy=publishedAt"};
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    category: "top-headlines",
    query: "sources=techcrunch",
  });

  return (
    <div className="App">
      {/* <News news={this.state.news1} />
      <hr/>
      <News news={this.state.news2} />
      <hr/>
      <News news={this.state.news3} /> */}
      <button onClick={() => dispatch({ type: "everything" })}>
        everything
      </button>
      <button onClick={() => dispatch({ type: "tesla" })}>
        tesla
      </button>
      <News news={state} />
    </div>
  );
}
