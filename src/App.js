import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  this.state= {
    
  }
  createNewInput = () => {
    return <input />;
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.createNewInput}>cica</button>
        {this.createNewInput()}
      </div>
    );
  }
}

export default App;
