import React, {Component} from 'react';
import Button from './button.js';
import Title from './title.js';



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.status = {
      isHome: false,
      isSearch: false,
      isRandom: false
    }

    this.goToHome = this.goToHome.bind(this);
  }

  goToHome (){
    
  }



  render () {
    return (
     <div className='bg-dark text-white d-flex'>
       <div className='px-5 py-2'>
       <Title />
       </div>  
      <div className='float-right mt-5 mx-5'> 
       <Button value='HOME' onClick={this.goToHome}></Button>
       <Button value='SEARCH'></Button>
       <Button value='RANDOM'></Button>
      </div>
     </div>
    )
  }
}

export default Navbar;