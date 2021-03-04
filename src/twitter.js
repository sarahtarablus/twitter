import React, {Component} from 'react';
// import axios from 'axios';
import background from './images/TwitterPic.jpg';
import Navbar from './Navbar.js';




const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover' 
};

class Twitter extends Component {
  render (){
    return (
     <div style={divStyle}>
       <Navbar />
     </div>
    )
  }
}

export default Twitter;