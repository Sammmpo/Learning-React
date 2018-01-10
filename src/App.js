import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassIcon from './ClassIcon.js';
import InfoPage from './InfoPage.js';

class App extends Component {
  state = {selectedClass: ""};

  handleClick = (name) => {
    this.setState({selectedClass: name});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WoW Classic</h1>
        </header>
        <p className="App-intro">Choose Class</p>
          <ClassIcon name="warrior" handleClick={this.handleClick} active={this.state.selectedClass === "warrior"} />
          <ClassIcon name="paladin" handleClick={this.handleClick} active={this.state.selectedClass === "paladin"} />
          <ClassIcon name="shaman" handleClick={this.handleClick} active={this.state.selectedClass === "shaman"} />
          <ClassIcon name="hunter" handleClick={this.handleClick} active={this.state.selectedClass === "hunter"} />
          <ClassIcon name="druid" handleClick={this.handleClick} active={this.state.selectedClass === "druid"} />
          <ClassIcon name="rogue" handleClick={this.handleClick} active={this.state.selectedClass === "rogue"} />
          <ClassIcon name="warlock" handleClick={this.handleClick} active={this.state.selectedClass === "warlock"} />
          <ClassIcon name="mage" handleClick={this.handleClick} active={this.state.selectedClass === "mage"} />
          <ClassIcon name="priest" handleClick={this.handleClick} active={this.state.selectedClass === "priest"} />
          <div/>
          <InfoPage id="infoPage" />
      </div>
    );
  }


}

export default App;
