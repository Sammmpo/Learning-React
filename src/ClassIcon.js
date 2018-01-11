import React, { Component } from 'react';

class ClassIcon extends Component {

    render() {
        // name=warrior, classClick=classClick(), active=true/false
        const { name, classClick, active } = this.props;
        const className = active ? "" : "greyOut";

        return (
        <img name={name} src={`/img/`+name+`.png`} alt={name} onClick={() => classClick(name)} className={className} height='70' />
        );
    }

}
  
export default ClassIcon;