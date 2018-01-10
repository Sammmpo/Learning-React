import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassIcon from './ClassIcon.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WoW Classic</h1>
        </header>
        <p className="App-intro">Choose Class</p>
          <ClassIcon className="warrior" />
          <ClassIcon className="paladin" />
          <ClassIcon className="shaman" />
          <ClassIcon className="hunter" />
          <ClassIcon className="druid" />
          <ClassIcon className="rogue" />
          <ClassIcon className="warlock" />
          <ClassIcon className="mage" />
          <ClassIcon className="priest" />
      </div>
    );
  }
}

export default App;
