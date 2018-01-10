import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassIcon from './ClassIcon.js';
import InfoPage from './InfoPage.js';

class App extends Component {
  state = {selectedClass: "warrior"};

  handleClick = (name) => {
    this.setState({selectedClass: name});
  };

  render() {
    const allClasses = ["warrior", "paladin", "shaman", "hunter", "druid", "rogue", "warlock", "mage", "priest"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WoW Classic</h1>
        </header>
        <p className="App-intro">Choose Class</p>
            { allClasses.map(name => {
            return <ClassIcon key={name} name={name} handleClick={this.handleClick} active={this.state.selectedClass === name} />
            }) }
        <div/>
        <InfoPage id="infoPage" />
      </div>
    );
  }


}

export default App;
