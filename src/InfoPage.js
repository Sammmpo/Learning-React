import React from 'react';

function InfoPage(props) {
    const {name} = props;
    //let array = document.getElementsByTagName("InfoPage");
    return(
        <span>{name}</span>
    );
}

// class InfoPage extends Component {
    
//     render() {


//         return(
//             <span>lol</span>
//         );
//     }
    
// }

export default InfoPage;