import React, {Component} from 'react';

class Image extends Component {
  render () {
    return (
      <img src={require('./src/Pictures/TwitterPic.jpg')} alt='' className=''></img>
    )
  }
}

export default Image;