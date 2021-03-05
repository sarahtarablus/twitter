import React, {Component} from 'react';


class Button extends Component {
  render () {
    return (
      <button className='btn btn-dark btn-lg m-2' onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

export default Button;