import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/Main";
import "./App.css"

function App() {
  return (
    <div className="App">
                <BrowserRouter>

                    <MainComponent />
                </BrowserRouter>
            </div>
  );
}

export default App;
