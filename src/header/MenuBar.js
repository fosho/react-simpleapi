import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './MenuBar.css';
import CryptoApi from '../cryptoapi/CryptoApi';
import GifApi from '../gifapi/GifApi';
import About from '../about/About';
import '../App.css';

class MenuBar extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="content">
              <p className="scrolling"><strong>Updates coming soon!</strong></p>
              <ul class="topnav">
                <li><a href="/">Home</a></li>
                <li><a href="/cryptoapi">Crypto API</a></li>
                <li><a href="/gifapi">GIF Api</a></li>
                <li class="right" ><a href="/about">About</a></li>
              </ul>
              <Switch>
                <Route exact path="/cryptoapi" component={CryptoApi} />
                <Route path="/gifapi" component={GifApi} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
}

export default MenuBar;