import React from "react";
import logo from "./logo.svg";
import "./App.css";

// function a = 5;

const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>There will be2test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
};

export default App;
