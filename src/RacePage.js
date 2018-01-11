import React from 'react';

const uselessByClass = {
    warrior: ["The Human Spirit", "Gun Specialization", "Expansive Mind", "Command"],
    paladin: ["Gun Specialization"],
    shaman: ["Command", "Throwing/Bow Specialization"],
    hunter: ["Quickness", "Blood Fury", "Axe Specialization"],
    druid: [],
    rogue: ["The Human Spirit", "Gun Specialization", "Expansive Mind", "Command", "Throwing/Bow Specialization"],
    warlock: ["Mace Specialization", "Sword Specialization", "Blood Fury", "Axe Specialization"],
    mage: ["Mace Specialization", "Sword Specialization", "Throwing/Bow Specialization"],
    priest: ["Mace Specialization", "Sword Specialization", "Quickness", "Gun Specialization", "Throwing/Bow Specialization"]
}

function checkUseful(racialName, selectedClass){
    let useful = "";
    if (uselessByClass[selectedClass].indexOf(racialName) >= 0){
        useful = "greyOut"
    }
    return useful;
}

function RacePage(props) {
    const {race, selectedClass} = props;

    const racialsHuman = [{
        name: "Diplomacy",
        desc: "Reputation gains increased by 10%.",
        url: "/img/diplomacy.jpg"
     }, {
        name: "The Human Spirit",
        desc: "Increases spirit by 5%.",
        url: "/img/thehumanspirit.jpg"
     }, {
        name: "Mace Specialization",
        desc: "Skill with Maces and Two-Handed Maces increased by 5.",
        url: "/img/macespecialization.png"
    }, {
        name: "Sword Specialization",
        desc: "Skill with Swords and Two-Handed Swords increased by 5.",
        url: "/img/swordspecialization.png"
    }, {
        name: "Perception",
        desc: "Dramatically increases stealth detection for 20 seconds. 3 min cooldown.",
        url: "/img/perception.png"
     }];

     const racialsNightelf = [{
        name: "Shadowmeld",
        desc: "Activate to slip into the shadows, reducing the chance for enemies to detect your presence. Lasts until cancelled or upon moving. Night Elf Rogues and Druids with Shadowmeld are more difficult to detect while stealthed or prowling.",
        url: "/img/shadowmeld.png"
     }, {
        name: "Quickness",
        desc: "Dodge chance increased by 1%.",
        url: "/img/quickness.png"
     }, {
        name: "Wisp Spirit",
        desc: "Transform into a wisp upon death, increasing speed by 50%.",
        url: "/img/wispspirit.png"
    }, {
        name: "Nature Resistance",
        desc: "Nature Resistance increased by 10.",
        url: "/img/natureresistance.png"
     }];

     const racialsDwarf = [{
        name: "Stoneform",
        desc: "While active, grants immunity to Bleed, Poison, and Disease effects. In addition, Armor increased by 10%. Lasts 8 sec. 3 min cooldown.",
        url: "/img/stoneform.jpg"
     }, {
        name: "Gun Specialization",
        desc: "Guns skill increased by 5.",
        url: "/img/gunspecialization.png"
     }, {
        name: "Frost Resistance",
        desc: "Frost Resistance increased by 10.",
        url: "/img/frostresistance.jpg"
    }, {
        name: "Find Treasure",
        desc: "Allows the dwarf to sense nearby treasure, making it appear on the minimap.",
        url: "/img/findtreasure.jpg"
     }];

     const racialsGnome = [{
        name: "Escape Artist",
        desc: "Escape the effects of any immobilization or movement speed reduction effect. 1 sec cast. 1 min cooldown.",
        url: "/img/escapeartist.png"
     }, {
        name: "Expansive Mind",
        desc: "Intelligence increased by 5%.",
        url: "/img/expansivemind.png"
     }, {
        name: "Arcane Resistance",
        desc: "Arcane Resistance increased by 10.",
        url: "/img/arcaneresistance.png"
    }, {
        name: "Engineering Specialization",
        desc: "Engineering skill increased by 15.",
        url: "/img/engineeringspecialization.jpg"
     }];

     const racialsOrc = [{
        name: "Blood Fury",
        desc: "Increases base melee attack power by 25% for 15 sec and reduces healing effects on you by 50% for 25 sec. 2 min cooldown.",
        url: "/img/bloodfury.jpg"
     }, {
        name: "Hardiness",
        desc: "Chance to resist Stun effects increased by an additional 25%.",
        url: "/img/hardiness.png"
     }, {
        name: "Command",
        desc: "Damage done by Hunter and Warlock pets increased by 5%.",
        url: "/img/command.png"
    }, {
        name: "Axe Specialization",
        desc: "Skill with Axes and Two-Handed Axes increased by 5.",
        url: "/img/axespecialization.png"
     }];

     const racialsTauren = [{
        name: "War Stomp",
        desc: "Stuns up to 5 enemies within 8 yds for 2 sec. 2 min cooldown.",
        url: "/img/warstomp.png"
     }, {
        name: "Endurance",
        desc: "Total Health increased by 5%",
        url: "/img/endurance.png"
     }, {
        name: "Cultivation",
        desc: "Herbalism skill increased by 15.",
        url: "/img/cultivation.png"
    }, {
        name: "Nature Resistance",
        desc: "Nature Resistance increased by 10.",
        url: "/img/natureresistance.png"
     }];

     const racialsUndead = [{
        name: "Will of the Forsaken",
        desc: "Provides immunity to Charm, Fear and Sleep while active. May also be used while already afflicted by Charm, Fear or Sleep. Lasts 5 sec. 2 min cooldown.",
        url: "/img/willoftheforsaken.png"
     }, {
        name: "Cannibalize",
        desc: "When activated, regenerates 7% of total health every 2 sec for 10 sec. Only works on Humanoid or Undead corpses within 5 yds. Any movement, action, or damage taken while Cannibalizing will cancel the effect.",
        url: "/img/cannibalize.png"
     }, {
        name: "Underwater Breathing",
        desc: "Underwater breath lasts 300% longer than normal.",
        url: "/img/underwaterbreathing.png"
     }, {
        name: "Shadow Resistance",
        desc: "Shadow Resistance increased by 10.",
        url: "/img/shadowresistance.png"
     }];

     const racialsTroll = [{
        name: "Berserking",
        desc: "Increases your casting and attack speed by 10% to 25%. At full health the speed increase is 10% with a greater effect up to 25% if you are badly hurt when you activate Berserking. Lasts 10 sec. 3 min cooldown.",
        url: "/img/berserking.png"
     }, {
        name: "Regeneration",
        desc: "Health regeneration rate increased by 10%. 10% of total Health regeneration may continue during combat.",
        url: "/img/regeneration.png"
     }, {
        name: "Beast Slaying",
        desc: "Damage dealt versus Beasts increased by 5%",
        url: "/img/beastslaying.png"
     }, {
        name: "Throwing/Bow Specialization",
        desc: "Skill with Throwing/Bow Weapons increased by 5.",
        url: "/img/throwingspecialization.png"
     }];

    const racials = {
        human: racialsHuman,
        nightelf: racialsNightelf,
        dwarf: racialsDwarf,
        gnome: racialsGnome,
        orc: racialsOrc,
        tauren: racialsTauren,
        undead: racialsUndead,
        troll: racialsTroll
    }

    const priestRacialsHuman = [{
        name: "Feedback",
        desc: "The priest becomes surrounded with anti-magic energy. Any successful spell cast against the priest will burn X of the attacker's Mana, causing 1 Shadow damage for each point of Mana burned. Lasts 15 sec. 3 min cooldown.",
        url: "/img/feedback.png"
     }, {
        name: "Desperate Prayer",
        desc: "Heals the caster for 22% of maximum health. 2 min cooldown.",
        url: "/img/desperateprayer.png"
     }];
     const priestRacialsNightelf = [{
        name: "Starshards",
        desc: "Rains starshards down on the enemy target's head, causing X Arcane damage over 15 sec. 30 second cooldown.",
        url: "/img/starshards.png"
     }, {
        name: "Elune's Grace",
        desc: "Reduces the chance you'll be hit by melee and ranged attacks by 20% for 15 sec. 3 min cooldown.",
        url: "/img/elunesgrace.png"
     }];
     const priestRacialsDwarf = [{
        name: "Fear Ward",
        desc: "Wards the friendly target against Fear. The next Fear effect used against the target will fail, using up the ward. Lasts 3 min. 3 min cooldown.",
        url: "/img/fearward.png"
     }, {
        name: "Desperate Prayer",
        desc: "Heals the caster for 22% of maximum health. 2 min cooldown.",
        url: "/img/desperateprayer.png"
     }];
     const priestRacialsUndead = [{
        name: "Touch of Weakness",
        desc: "The next damaging melee attack against you will damage and weaken the target.",
        url: "/img/touchofweakness.png"
     }, {
        name: "Devouring Plague",
        desc: "Consumes 3 Shadow Orbs to deal x Shadow damage and then an additional 100% of the initial damage over 6 sec. Heals the caster for 100% of damage done.",
        url: "/img/devouringplague.png"
     }];
     const priestRacialsTroll = [{
        name: "Hex of Weakness",
        desc: "Weakens the target enemy, reducing damage caused by X and reducing the effectiveness of any healing by 20%. Lasts 2 min.",
        url: "/img/hexofweakness.png"
     }, {
        name: "Shadowguard",
        desc: "The caster is surrounded by shadows. When a spell, melee or ranged attack hits the caster, the attacker will be struck for X Shadow damage. Attackers can only be damaged once every few seconds. This damage causes no threat. 3 charges. Lasts 10 min.",
        url: "/img/shadowguard.png"
     }];

    const priestRacials = {
        human: priestRacialsHuman,
        nightelf: priestRacialsNightelf,
        dwarf: priestRacialsDwarf,
        undead: priestRacialsUndead,
        troll: priestRacialsTroll
    }

        const baseSkills = racials[race];
        const priestSkills = priestRacials[race];
        let final = racials[race];

    if (selectedClass === "priest"){
        final = baseSkills.concat(priestSkills)
    }
        return(        
            <div class="row">
                <div class="col-sm-1 col-lg-3"></div>
                <div class="col-sm-9 col-lg-6">
                {final.map(racial => (
                    <div className="racial">
                    <div class="row">
                    <div className={checkUseful(racial.name, selectedClass)}>
                        <div class="col-sm-2">
                        <img className="skillicon" src={racial.url} alt={racial.name} />
                        </div>
                        <div class="col-sm-8">
                            <div className="racialText">
                            <p className="racialName" >{racial.name}</p>
                            <p className="racialDesc" >{racial.desc}</p>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                    </div>
                    </div>     
                ))}
                </div>
                <div class="col-sm-1 col-lg-3"></div>
            </div>
        );
    
}

export default RacePage;

