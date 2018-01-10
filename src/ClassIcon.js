import React, { Component } from 'react';

//var allClasses = ["warrior", "paladin", "shaman", "hunter", "druid", "rogue", "warlock", "mage", "priest"];

class ClassIcon extends Component {

    handleClick = () => {
        let arrayOfClassIcons = document.getElementsByTagName("img");
        for (let i = 0; i < arrayOfClassIcons.length; i++){
            arrayOfClassIcons[i].classList.add("greyOut");
        }
        const { className } = this.props;
        document.getElementById(className).classList.remove("greyOut");
    };

    render() {
        const { className } = this.props;
        return (
        <img src={`/img/`+className+`.png`} alt={className} id={className} onClick={this.handleClick} height='70' />
        );
    }

}
  

export default ClassIcon;