import React, { Component } from 'react';

class RaceIcon extends Component {

    render() {
        // name=human, raceClick=raceClick(), active=true/false
        const { name, raceClick, active } = this.props;
        const className = active ? "" : "greyOut";

        return (
        <img name={name} src={`/img/`+name+`.jpg`} alt={name} onClick={() => raceClick(name)} className={className} height='60' />
        );
    }

}
  
export default RaceIcon;