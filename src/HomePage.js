import React, {Component} from 'react';
import Button from './button.js';
import background from './images/TwitterPic.jpg';
import background2 from './images/twitterPic2.jpg';
import SearchPage from './SearchPage';
import RandomPage from './RandomPage';
import Title from './title.js';


const divStyleHome = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover' 
};


const divStyleSearch = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background2})`,
  backgroundSize: 'cover'
}

const divStyleRandom = {
  width: '100%',
  height: '800px',
  backgroundColor: '#ffb3b3'
}



class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHome: false,
      isSearch: false,
      isRandom: false
    }

    this.goToHome = this.goToHome.bind(this);
    this.goToSearch = this.goToSearch.bind(this);
    this.goToRandom = this.goToRandom.bind(this);
  }

  componentDidMount () {
    this.goToHome();
  }


  goToHome (){
    this.setState({isHome: true, isSearch: false, isRandom: false})
  }

  goToSearch (){
    console.log('search')
    this.setState({isSearch: true, isHome: false, isRandom: false})
  }

  goToRandom (){
    this.setState({isRandom: true, isSearch: false, isHome: false})
  }
  render () {
    const {isHome, isSearch, isRandom} = this.state;
    let page;
    if(isHome){
     page = 
    <div style={divStyleHome}>
     <div className='bg-dark text-white d-inline-flex'>
       <div className='justify-content-start'>
        <Title />
       </div>
      <div className='justify-content-end'> 
       <Button value='HOME' onClick={this.goToHome}></Button>
       <Button value='SEARCH' onClick={this.goToSearch}></Button>
       <Button value='RANDOM' onClick={this.goToRandom}></Button>
      </div>
     </div>
    </div>
    }else if(isSearch){
     page = 
   <div style={divStyleSearch}>
     <div className='bg-dark text-white'>
      <div className='d-flex justify-content-end'> 
       <Button value='HOME' onClick={this.goToHome}></Button>
       <Button value='SEARCH' onClick={this.goToSearch}></Button>
       <Button value='RANDOM' onClick={this.goToRandom}></Button>
      </div>
     </div>
     <div>
     <SearchPage />
     </div>
     </div>
    }else if(isRandom){
     page = 
    <div style={divStyleRandom}>
     <div className='bg-dark text-white'>
      <div className='d-flex justify-content-end'> 
       <Button value='HOME' onClick={this.goToHome}></Button>
       <Button value='SEARCH' onClick={this.goToSearch}></Button>
       <Button value='RANDOM' onClick={this.goToRandom}></Button>
      </div>
     </div>
        <RandomPage />
    </div>
    }
    return (
     <div>
     {page}
     </div>
    
    )
  }
}

export default HomePage;

