import React, { Component } from 'react';
import './GifApi.css';

class GifApi extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        term: '',
        img: ''
      }
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const api_key = 'dc6zaTOxFJmzC';
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ term: '', img: data.data[0].images.fixed_height.url }))
        .catch(e => console.log(`error`, e));
    }

    render() {
        return (
          <div id="GifApi">
          <h4>Enter a Gif Term</h4>
            <form onSubmit={this.handleSubmit}>
          
              {/* -value takes what is stored in our state as term
                  -onChange changes state depending on input value*/}
              <input value={this.state.term} onChange={this.onChange} />
              <br></br>
              <button>Search</button>
            </form>
            <img src={this.state.img} height="200"/>
          </div>
        );
      }
    }
    
    export default GifApi;