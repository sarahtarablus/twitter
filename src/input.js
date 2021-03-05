import React, {Component} from 'react';
// import Button from './button.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Input extends Component {
  render () {
    return (
      <div className='d-flex justify-content-center pt-5 pb-2'>
        <input type='text' className='form-control-lg bg-white border border' placeholder='Search'></input>
      </div>
    )
  }
}

export default Input;