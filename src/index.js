import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var allClasses = ["warrior", "paladin", "shaman", "hunter", "druid", "rogue", "warlock", "mage", "priest"];

var lol = "<span>LOL</span>"

for (let i = 0; i < allClasses.length; i++){
  var value = allClasses[i];
  document.getElementById('classes').innerHTML +=  "<img src='img/"+value+".png' alt="+value+" id="+value+" height='75' onclick='chooseClass("+value+")' />";
}

function ClassIcon(props) {
  const { className } = props;

  return (
      <Image src={'/img/${className}.png'} />
  )
}

function chooseClass(className){

}

// function chooseClass(className){
//   for (let i = 0; i < allClasses.length; i++){
//       document.getElementById(allClasses[i]).classList.remove("greyOut");
//   }
//   document.getElementById(className).classList.add("greyOut");
// }
