import React from 'react';
import RacePage from './RacePage.js';

function InfoPage(props) {
    const {selectedClass, selectedRace} = props;
    
    return(
        <div>
        <p>{selectedClass} {selectedRace}</p>
        <RacePage race={selectedRace} selectedClass={selectedClass}/>
        </div>
    );
}

// function getPage(value){
//     if (value === "human"){ return <PageHuman/>}
//     if (value === "nightelf"){return <PageNightelf/>}
//     if (value === "dwarf"){return <PageDwarf/>}
//     if (value === "gnome"){return <PageGnome/>}

//     if (value === "orc"){return <PageOrc/>}
//     if (value === "tauren"){return <PageTauren/>}
//     if (value === "undead"){return <PageUndead/>}
//     if (value === "troll"){return <PageTroll/>}
// }

export default InfoPage;