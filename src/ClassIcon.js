import React, { Component } from 'react';
import InfoPage from './InfoPage.js';

//var allClasses = ["warrior", "paladin", "shaman", "hunter", "druid", "rogue", "warlock", "mage", "priest"];

class ClassIcon extends Component {

    render() {
        // name=warrior, handleClick=handleClick(), active=true/false
        const { name, handleClick, active } = this.props;
        //classicon gets classname with "" or "greyOut"
        const className = active ? "" : "greyOut";
        return (
        <img name={name} src={`/img/`+name+`.png`} alt={name} onClick={() => handleClick(name)} className={className} height='70' />
        );
    }

}
  
export default ClassIcon;