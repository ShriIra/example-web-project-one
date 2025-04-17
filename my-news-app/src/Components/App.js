import {Component} from "react";
import News from "./News"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        category: "top-headlines",
        query: "sources=techcrunch"
      },

      news2: {
        category: "everything",
        query: "domains=wsj.com"
      },
       news3: {
        category: "everything",
        query: "q=tesla&from=2025-03-17&sortBy=publishedAt"
       }
    }
  }

  render() {
    return (
      <div className="App">
        <News news={this.state.news1} />
        <hr/>
        <News news={this.state.news2} />
        <hr/>
        <News news={this.state.news3} />
      </div>
    );
  }
}

export default App;
