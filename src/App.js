import React, { Component } from 'react';
import './App.css';
import ClassIcon from './ClassIcon.js';
import RaceIcon from './RaceIcon.js';
import InfoPage from './InfoPage.js';

const racesByClass = {
  warrior: ["human", "nightelf", "dwarf", "gnome", "orc", "tauren", "undead", "troll"],
  paladin: ["human", "dwarf"],
  shaman: ["orc", "tauren", "troll"],
  hunter: ["nightelf", "dwarf", "orc", "tauren", "troll"],
  druid: ["nightelf", "tauren"],
  rogue: ["human", "nightelf", "dwarf", "gnome", "orc", "undead", "troll"],
  warlock: ["human", "gnome", "orc", "undead"],
  mage: ["human", "gnome", "undead", "troll"],
  priest: ["human", "nightelf", "dwarf", "undead", "troll"]
}

class App extends Component {
  state = {selectedClass: "warrior", selectedRace: "human"};

  classClick = (name) => {
    this.setState({selectedClass: name});
    for (let i=0; i < racesByClass[name].length; i++){
      if (this.state.selectedRace === racesByClass[name][i]){
        this.setState({selectedRace: this.state.selectedRace});
        return;
      } else { this.setState({selectedRace: racesByClass[name][0]}); }
    }
  };

  raceClick = (name) => {
    this.setState({selectedRace: name});
  };

  render() {
    const allClasses = ["warrior", "paladin", "shaman", "hunter", "druid", "rogue", "warlock", "mage", "priest"];
    let races = racesByClass[this.state.selectedClass];

    return (
      <div className="App">
        <header className="App-header">
          <img src="/img/wow.png" className="App-logo" alt="logo" />
          <h1 className="App-title">WoW Classic</h1>
        </header>
        <p className="App-intro">Choose Class</p>
            { allClasses.map(name => {
            return <ClassIcon key={name} name={name} classClick={this.classClick} active={this.state.selectedClass === name} />
            }) }
        <div/>
            { races.map(name => {
            return <RaceIcon key={name} name={name} raceClick={this.raceClick} active={this.state.selectedRace === name} />
            }) }
        <div/>
        <InfoPage selectedClass={this.state.selectedClass} selectedRace={this.state.selectedRace} />
      </div>
    );
  }

}

export default App;
