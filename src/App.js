import React, { Component } from 'react';
import MenuContainer from './header/MenuContainer';
import Footer from './footer/Footer';
import Ads from './ads/Ads';
import MenuBar from './header/MenuBar';
import './App.css';
import './header/MenuBar.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuContainer></MenuContainer>
        <div><MenuBar></MenuBar></div>
        <div class="holygrail-body">
        <div className="content"></div>
          <ul class="nav">
            <li><a href="#">-This is a link</a></li>
            <li><a>-This is not a link</a></li>
            <li><a>-This is not a link</a></li>
          </ul>
          <div class="aside"><Ads></Ads></div>
        </div>
        <div class="footer"><Footer></Footer></div>
      </div>
    );
  }
}

export default App;
