import React from 'react';

function RacePage(props) {
    const {race, selectedClass} = props;

    const racialsHuman = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsNightelf = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsDwarf = [{
        name: "kääpiövoimia",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsGnome = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsOrc = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsTauren = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
    }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsUndead = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsTroll = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }, {
        name: "The Human Spirit",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];

     const racialsUnknown = [{
        name: "",
        desc: "",
        url: ""
     }]

    const racials = {
        human: racialsHuman,
        nightelf: racialsNightelf,
        dwarf: racialsDwarf,
        gnome: racialsGnome,
        orc: racialsOrc,
        tauren: racialsTauren,
        undead: racialsUndead,
        troll: racialsTroll,
        unknown: racialsUnknown
    }

    const priestRacialsHuman = [{
        name: "priestispelli",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "toinen priesti spelli",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];
     const priestRacialsNightelf = [{
        name: "priestispelli",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "toinen priesti spelli",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];
     const priestRacialsDwarf = [{
        name: "priestispelli",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "toinen priesti spelli",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];
     const priestRacialsUndead = [{
        name: "priestispelli",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "toinen priesti spelli",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];
     const priestRacialsTroll = [{
        name: "priestispelli",
        desc: "Reputation gains increased by 10%.",
        url: "/img/stoneform.jpg"
     }, {
        name: "toinen priesti spelli",
        desc: "asdasd",
        url: "/img/stoneform.jpg"
     }];
     const priestRacialsUnknown = [{

     }];

    const priestRacials = {
        human: priestRacialsHuman,
        nightelf: priestRacialsNightelf,
        dwarf: priestRacialsDwarf,
        undead: priestRacialsUndead,
        troll: priestRacialsTroll,
        unknown: priestRacialsUnknown
    }

    if (selectedClass === "priest"){
        const base = racials[race];
        const priest = priestRacials[race];
        const both = base.concat(priest)
        return(        
            both.map(racial => (
                <div className="racial">
                <img src={racial.url} alt={racial.name} />
                <h2>{racial.name}</h2>
                <p>{racial.desc}</p>
                </div>
            ))
        );
    } else {
        return(
            racials[race].map(racial => (
                <div className="racial">
                <img src={racial.url} alt={racial.name} />
                <h2>{racial.name}</h2>
                <p>{racial.desc}</p>
                </div>
            ))
        );
    }
}

export default RacePage;

