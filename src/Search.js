import React from 'react';


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
    </div>
  )
}

export default Search;