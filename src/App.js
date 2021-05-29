import React from "react";
import { Route } from "react-router-dom";
import "./normalize.css";
import "semantic-ui-css/semantic.min.css";
// import logo from './logo.svg';
import './App.css';

// pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// APP 
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <Route component={LoginPage} path={"/login"} />
      <Route component={RegisterPage} path={"/register"} />
    </div>
  );
}

export default App;
