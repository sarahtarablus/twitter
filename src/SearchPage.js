import React, {Component} from 'react';
import Input from './input.js';
import Button from './button.js';





class SearchPage extends Component {
  render () {
    return (
      <div>
        <Input />
        <div className='d-flex flex-row justify-content-center'>
          <Button value='Username'/>
          <Button value='Content'/>
        </div> 
      </div>
    )
  }
}

export default SearchPage;