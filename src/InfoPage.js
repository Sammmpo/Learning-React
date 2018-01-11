import React from 'react';
import RacePage from './RacePage.js';

function InfoPage(props) {
    const {selectedClass, selectedRace} = props;
    
    return(
        <div>
        <p className="text" >[{selectedClass}, {selectedRace}]</p>
        <RacePage race={selectedRace} selectedClass={selectedClass}/>
        </div>
    );
}

export default InfoPage;