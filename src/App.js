import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './Home.js';
import Search from './Search.js';
import Random from './Random.js';
import './style.css';


class App extends Component {
  render () {
    return (
      <HashRouter className='navbar'>
        <div>
          <ul>
            <li className='linkHome'><NavLink to ='/'>HOME</NavLink></li>
            <li><NavLink to ='/Search'>SEARCH</NavLink></li>
            <li><NavLink to ='/Random'>RANDOM</NavLink></li>
          </ul>
          <div>
            <Route exact path ='/' component={Home} />
            <Route path ='/Search' component={Search} />
            <Route path ='/Random' component={Random} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;