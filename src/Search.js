import React from 'react';
import Showcase from './Showcase.js';



const Search = (props) => {
  return (
    <div className='search'>
      <div className='input'>
        <input name='searchInput' placeholder='search' required></input>
      </div>
      <div className='buttons'>
        <button>Username</button>
        <button>Content</button>
      </div>
      <div>
       <Showcase name='jon doe' username='@jondoe' date='Mon Mar 08 13:37:35' content='Hello my name is Jon and I am a new user,Hello my name is Jon and I am a new user,Hello my name is Jon and I am a new user,Hello my name is Jon and I am a new user,Hello my name is Jon and I am a new user,Hello my name is Jon and I am a new user'/>
      </div>
    </div>
  )
}

export default Search;